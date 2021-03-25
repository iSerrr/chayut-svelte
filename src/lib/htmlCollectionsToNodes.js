export  default (nodes) => {
    let res = []
    nodes.forEach(node => {
        if (node.nodeName !== '#text') res = [...res, node]
    })
    return res
}