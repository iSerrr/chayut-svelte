// import $ from 'jquery'

import htmlCollectionsToNodes from '../../../../lib/htmlCollectionsToNodes'
import sumOfAllPreviousDelays from '../../../../lib/sumOfAllPreviousDelays'

class phoneChat {
    constructor() {
        this.selector = '.phone__content'
        // this.$win = $(window)
        this.screenHeight = window.innerHeight
        this.animationStarted = false
        this.promptsBuildDependenciesChildren = [3, 5, 6]

        this.nodes = {
            root: document.querySelector('.phone__content'),
            inMessage: document.querySelector('.phone__in-message'),
            outMessage: document.querySelector('.phone__out-message'),
            imgMessage: document.querySelector('.phone__message-with-img'),
            btn: document.querySelector('.phone__btn'),
            prompt: document.querySelector('.prompt')
        }
    }

    bootstrap() {
        window.addEventListener('scroll', this.scrollListeners.bind(this))
    }

    scrollListeners() {
        this.headerOnScroll()
    }

    addAnimation({prompt, root}) {
        if (window.innerWidth >= 1024) prompt.classList.remove('hidden')
        setTimeout(()=>{
            if (window.innerWidth >= 1024) return
            prompt.classList.remove('hidden')},1000)

        prompt.classList.add('get-prompt')

        htmlCollectionsToNodes(root.childNodes).reduce((sum, node) => {
            const currentDelay = +node.dataset.delay || 0

            node.classList.add('get-message')
            node.classList.remove('hidden')

            node.style.animationDelay = `${sum}ms`
            return sum + currentDelay
        }, 0)

        this.promptsBuildDependenciesChildren.forEach((value, index) => htmlCollectionsToNodes(prompt.childNodes)[index].style.animationDelay = htmlCollectionsToNodes(root.childNodes)[value].style.animationDelay)

        const step = 100 / 3
        let position = 0 - step

        this.promptsBuildDependenciesChildren.forEach((item, indexGenral) => {

            const currentDelay = sumOfAllPreviousDelays(htmlCollectionsToNodes(root.childNodes).slice(0, item))
            prompt.style.transform = (window.innerWidth >= 1024)? `translateX(0)`:`translateX(${-66.66}%)`;


            setTimeout(() => {
                if (window.innerWidth >= 1024) return

                htmlCollectionsToNodes(prompt.childNodes).forEach(item => item.classList.remove('current'))
                htmlCollectionsToNodes(prompt.childNodes)[indexGenral].classList.add('current')
                prompt.style.transform = `translateX(${position}%)`
                position += step

            }, currentDelay)
        })
    }

    clearAnimation({prompt, root}) {
        prompt.classList.remove('get-prompt')
        prompt.classList.add('hidden')

        htmlCollectionsToNodes(prompt.childNodes).forEach(item => item.style.animationDelay = `${0}s`)
        htmlCollectionsToNodes(prompt.childNodes).forEach(item => item.classList.remove('current'))

        htmlCollectionsToNodes(root.childNodes).forEach((item) => {
            item.classList.add('hidden')
            item.classList.remove('get-message')
            item.style.animationDelay = `0s`
        })

        prompt.style.transform = (window.innerWidth >= 1024)? `translateX(0)`:`translateX(${200}%)`;
    }

    setDelayInEachMessage() {
        const {root, prompt} = this.nodes

        htmlCollectionsToNodes(root.childNodes).reduce((sum, node) => {
            const currentDelay = +node.dataset.delay || 0
            node.style.animationDelay = `${sum}ms`
            return sum + currentDelay
        }, 0)

        this.promptsBuildDependenciesChildren.forEach((value, index) => htmlCollectionsToNodes(prompt.childNodes)[index].style.animationDelay = htmlCollectionsToNodes(root.childNodes)[value].style.animationDelay)
    }

    headerOnScroll() {
        const {root, prompt} = this.nodes
        if (this.animationStarted) return
        const postStartAnimation = this.nodes.root.clientHeight - window.innerHeight / 2
        const scrollPos = window.pageYOffset

        if (scrollPos < postStartAnimation) return
        this.animationStarted = true
        this.addAnimation(this.nodes)
        this.setDelayInEachMessage()

        const nodes = this.nodes

        setInterval(() => {
            this.clearAnimation(nodes)
            setTimeout(() => this.addAnimation(nodes), 1000)
        }, sumOfAllPreviousDelays(htmlCollectionsToNodes(root.childNodes)))
    }
}

export default phoneChat