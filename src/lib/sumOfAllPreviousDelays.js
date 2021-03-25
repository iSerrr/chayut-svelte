export default (arr) => arr.reduce((sum, item) => {
    return sum + (+item.dataset.delay || 0)
},0)