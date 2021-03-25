import htmlCollectionsToNodes from './htmlCollectionsToNodes'
import AutoPlayTimer from '../pie/autoPlayTimer'
import handleSwipe from './handleSwipe'
import numModule from './numberModule'

export default class Swiper {

    constructor(nodes) {
        this.tableEventIsLoad = false
        this.isTablet = window.innerWidth < 1024

        this.autoPlayDuration = 8000
        this.timer = null

        this.currnetSlide = 1
        this.bowlRotateHolderStep = [68, 44, 43, 36, 24, 10, 41, 94]
        this.bowlRotateHolder = [497, 429, 385, 342, 306, 282, 272, 231]
        this.colorsHolder = ['#FE8687', '#E04040', '#FFD733', '#97D593', '#339C81', '#6173EE', '#5AC2FF', '#F2FBFE']

        this.nodes = nodes
    }

    bootstrap() {
        window.addEventListener('resize', this.resizeListeners.bind(this))
    }

    resizeListeners() {
        this.isTablet = window.innerWidth < 1024
    }

    start() {

        console.log(this.colorsHolder)
        const {root} = this.nodes

        this.createPaginationList()
        this.initialPaddingBottom()
        this.reverse()
        this.initialOrderforLabels()

        this.cloneSlide()

        this.currnetSlide = 3
        this.bowlInitial()

        if (!this.tableEventIsLoad) {

            handleSwipe(this.prevSlide.bind(this), this.nextSlide.bind(this), this.nodes, this.isTablet)
            this.initialAutoPlay()
            this.tableEventIsLoad = true
        }

        this.timer.start()
        this.changeDesc(this.currnetSlide)
        this.transitionHandler('add', 400)

        root.addEventListener('transitionend', (e) => {
            const {target} = e
            if (!target.classList.contains('case-statistics')) return
            this.resetPosition()
        })
    }

    stop() {
        this.timer.stop()
        this.reverse()
        this.transitionHandler('reset')
        this.initialPaddingBottom()
    }

    transitionHandler(action, duration = 400) {
        const labels = htmlCollectionsToNodes(this.nodes.root.childNodes)
        const {bowl, caseStatistics} = this.nodes
        const caseStatisticsExtraLists = document.querySelectorAll('.case-statistics__extra-list')

        switch (action) {
            case 'reset': {
                labels.forEach(item => item.classList.remove('transition'))
                caseStatistics.style.removeProperty('transition')
                bowl.style.removeProperty('transition')
                caseStatisticsExtraLists.forEach(item => item.style.removeProperty('transition'))
            }
                break
            case 'remove': {
                labels.forEach(item => item.classList.remove('transition'))
                caseStatistics.style.transition = '0s'
                bowl.style.transition = '0s'
                caseStatisticsExtraLists.forEach(item => item.style.transition = '0s')
            }
                break
            case 'add': {
                labels.forEach(item => item.classList.add('transition'))
                caseStatistics.style.transition = `${duration}ms`
                bowl.style.transition = `${duration}ms`
                caseStatisticsExtraLists.forEach(item => item.style.transition = `${duration}ms`)
            }
                break
            default:
                console.log('Error')
        }
    }

    resetPosition() {
        if ((11 !== this.currnetSlide) && (2 !== this.currnetSlide)) return
        if (11 === this.currnetSlide) this.currnetSlide = 3
        if (2 === this.currnetSlide) this.currnetSlide = 10

        this.transitionHandler('remove')
        this.changeDesc(this.currnetSlide)
    }

    createPaginationList() {
        const {pagination} = this.nodes
        pagination.innerHTML = ''

        const paginationItem = document.createElement('li')
        paginationItem.classList.add('pagination__item')

        this.colorsHolder.forEach((color, index) => {
            const paginationItem = document.createElement('li')
            paginationItem.classList.add('case-statistics__pagination-item')
            paginationItem.style.background = color
            paginationItem.addEventListener('click', () => this.getSlide(index))
            pagination.append(paginationItem)
        })
    }

    initialPaddingBottom() {
        if (window.innerWidth >= 1024) return this.nodes.caseStatistics.style.removeProperty('padding-bottom')

        this.nodes.caseStatistics.style.paddingBottom = `${this.calculateMaxHeightforExtraList() - 10}px`
    }

    initialOrderforLabels() {
        htmlCollectionsToNodes(this.nodes.root.childNodes).forEach((item, index) => {
            item.dataset.order = index
            item.dataset.clone = 'false'
        })
    }

    initialAutoPlay() {
        this.timer = new AutoPlayTimer(this.nextSlide.bind(this), this.autoPlayDuration)
    }

    calculateMaxHeightforExtraList() {
        const caseStatisticsExtraLists = document.querySelectorAll('.case-statistics__extra-list')
        return htmlCollectionsToNodes(caseStatisticsExtraLists).reduce((maxHeight, item) => {
            if (item.clientHeight >= maxHeight) return item.clientHeight
            return maxHeight
        }, 0)
    }

    reverse() {
        const {root} = this.nodes
        const slides = htmlCollectionsToNodes(root.childNodes).reverse()
        root.innerHTML = ''
        root.append(...slides)
    }

    cloneSlide() {
        const {root} = this.nodes

        const firstThirdSlides = htmlCollectionsToNodes(root.childNodes)
            .slice(0, 3)
            .map(node => {
                const newNode = node.cloneNode(true)
                newNode.dataset.clone = 'true'
                return newNode
            })

        const lastThirdSSlides = htmlCollectionsToNodes(root.childNodes)
            .reverse()
            .slice(0, 3)
            .map(node => {
                const newNode = node.cloneNode(true)
                newNode.dataset.clone = 'true'
                return newNode
            })
            .reverse()

        root.prepend(...lastThirdSSlides)
        root.append(...firstThirdSlides)
    }

    bowlInitial() {
        const {bowl} = this.nodes
        bowl.style.transform = `rotate(${497}deg)`
    }

    changeDesc(num) {
        const paginationItems = document.querySelectorAll('.case-statistics__pagination-item')
        const labels = htmlCollectionsToNodes(this.nodes.root.childNodes)
        const {caseStatistics} = this.nodes

        labels.forEach(item => item.classList.remove('showsDesc'))
        labels[num].classList.add('showsDesc')
        const activeLabelsOrder = +labels[num].dataset.order

        paginationItems.forEach(item => item.classList.remove('active'))
        paginationItems[activeLabelsOrder].classList.add('active')

        const currentTransform = this.currnetSlide * this.slideWidth()

        caseStatistics.style.transform = `translateX(${currentTransform}px)`
        this.timer.reset()
    }

    slideWidth() {
        return document.querySelector('.case-statistics__item').clientWidth + 10
    }

    bowlRotate(deg) {
        const {bowl} = this.nodes
        const regExp = /-?\d+/g
        const oldDeg = Number((bowl.style.transform.match(regExp)[0]))
        const newDeg = oldDeg - deg

        bowl.style.transform = `rotate(${newDeg}deg)`
    }

    nextSlide() {
        const labels = htmlCollectionsToNodes(this.nodes.root.childNodes)
        this.transitionHandler('add')

        this.currnetSlide += 1
        if (this.currnetSlide > labels.length - 3) return this.currnetSlide -= 1

        let res = +labels[this.currnetSlide].dataset.order - 1
        if (res < 0) res = 7

        this.changeDesc(this.currnetSlide)
        this.bowlRotate(this.bowlRotateHolderStep[res])
    }

    prevSlide() {
        const labels = htmlCollectionsToNodes(this.nodes.root.childNodes)

        this.currnetSlide -= 1
        if (this.currnetSlide < 2) return this.currnetSlide += 1

        let res = +labels[this.currnetSlide].dataset.order
        if (res > 7) res = 0

        this.transitionHandler('add')
        this.changeDesc(this.currnetSlide)
        this.bowlRotate(this.bowlRotateHolderStep[res] * (-1))
    }

    getSlide(num) {
        const previousNode = this.currnetSlide - 3
        const nextNode = num
        const step = numModule((previousNode - nextNode))

        this.currnetSlide = num + 3

        this.changeDesc(this.currnetSlide)
        this.transitionHandler('add', 300 + 400 * (step / 4))
        this.bowlRotate(this.bowlRotateHolder[previousNode] - this.bowlRotateHolder[num])

        const currentTransform = this.currnetSlide * this.slideWidth()
        const {caseStatistics} = this.nodes
        caseStatistics.style.transform = `translateX(${currentTransform}px)`
    }
}