'use strict'
const key = 'galleryDB'

var gProj = _createProjs()






function _createProjs() {
    var projs = []
    var a = _createPorj('aa', 'Threads', 'Illustration', 'lorem', "img/portfolio/01-thumbnail.jpg", ['matrix', 'css'])
    projs.push(a)
    var b = _createPorj('Finish', 'Finish', 'muted', 'lorem', "img/portfolio/03-thumbnail.jpg", ['matrix', 'css'])
    projs.push(b)
    var c = _createPorj('Lines', 'Lines', 'blalba', 'lorem', "img/portfolio/05-thumbnail.jpg", ['matrix', 'css'])
    projs.push(c)
    console.log('projs:', projs);

    return projs

}
function _createPorj(id, name, title, decs, url, labels) {
    const porj = {
        id,
        name,
        title,
        decs,
        url,
        publishedAt: Date.now(),
        labels,
    }
    return porj
}


function getProjs() {
    var projs = gProj
    // .filter(car =>
    // car.vendor.includes(gFilterBy.vendor) &&
    // car.maxSpeed >= gFilterBy.minSpeed)

    // const startIdx = gPageIdx * PAGE_SIZE
    // cars = cars.slice(startIdx, startIdx + PAGE_SIZE)
    return projs;
}




function getPorjById(id) {
    const proj = gProj.find((pro) => {
        return pro.id === id
    })
    return proj
}



// function getModalData(title) {
//     const projIdx = getProjs.findIndex(function (proj.title) {
//         return title === proj.titel
//     }

// //     const modal = {
// //         name: gProj[projIdx].name,
// //         img: gProj[projIdx].url,
// //         desc: gProj[projIdx].decs,
// //         date: gProj[projIdx].publishedAt,
// //         clint: 'lorem',
// //         Category: gProj[projIdx].name
// //     }
// //     return modal
// // }


// function removeBook(bookId) {
//     const bookIdx = gBooks.findIndex(function (book) {
//         return bookId === book.id

//     }
// }
