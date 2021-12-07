'use strict'


function onInit() {

    renderPortfolio()
}


function renderPortfolio() {

    var elItem = document.querySelector('.item')
    console.log('leItem:', elItem);
    const PROJS = getProjs()

    const strHtmls = PROJS.map((proj) => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src='${proj.url}' alt="">
    </a>
    <div class="portfolio-caption">
      <h4>'${proj.name}'</h4>
      <p class="text-muted">'${proj.title}'</p>
    </div>
    </div>`
    })
    elItem.innerHTML = strHtmls

}



function renderModal(id) {
    const currProj = getPorjById(id)
    console.log('currProg', currProj)
    var strHtml = ` <h2 class="modal-proj-name">${currProj.name}</h2>
    <p class="item-intro text-muted modal-title">${currProj.title}</p>
    <img class="img-fluid d-block mx-auto modal-proj-img" src="${currProj.url}" alt="">
    <p class="modal-desc">${currProj.desc}</p>
    <button class="btn btn-demo" type="button">
    <a href="./projects/${currProj.id}/index.html" target="_blank"><i class="fa fa-eye"></i>
        Check Demo</a></button>
    <button class="btn btn-danger btn-red" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
        Close Projec
        </button>
    `
    var elmodal = document.querySelector('.modal-body')
    elmodal.innerHTML = strHtml
}

function onSubmit() {

}
