
const key = 'galleryDB'

var gProj = _createProjs()
console.log('gProj:', gProj);





const item = {
    id: "Threads",
    name: "Threads",
    title: "Illustration",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "img/portfolio/01-thumbnail.jpg",
    publishedAt: Date.now(),

    labels: ["Matrixes", "keyboard events"]

}
function _createProjs() {
    var projs = []
    var a = _createPorj('Threads', 'Threads', 'Illustration', 'lorem', "img/portfolio/01-thumbnail.jpg", ['matrix', 'css'])
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




