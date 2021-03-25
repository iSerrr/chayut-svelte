const handleSwipe = (swipeLeftFn, swipeRightFn, element, isTablet) => {
    const {bowlWrapper} = element

    let initialPoint = 0
    let finalPoint = 0

    bowlWrapper.addEventListener('touchstart', (e) => {
        if (!isTablet) return
        e.stopPropagation()
        initialPoint = e.changedTouches[0]
    })

    bowlWrapper.addEventListener('touchend', (e) => {
        if (!isTablet) return
        e.preventDefault()
        e.stopPropagation()
        finalPoint = e.changedTouches[0]

        const xAbs = initialPoint.pageX - finalPoint.pageX

        if (xAbs > 50 || xAbs < -50) {
            if (finalPoint.pageX < initialPoint.pageX) {
                swipeLeftFn()
            } else {
                swipeRightFn()
            }
        }
    })
}

export default handleSwipe