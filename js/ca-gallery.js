(function ($) {
  "use strict"; // Start of use strict

  renderPortfolio()


  function renderPortfolio() {

    var elItem = document.querySelector('.item')
    console.log('leItem:', elItem);
    const PROJS = getProjs()
    console.log('PROJS:', PROJS);

    const strHtmls = PROJS.map((proj) => {
      return `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src=${proj.url} alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
      </div>
      </div>`
    })
    elItem.innerHTML = strHtmls


    //     elItem.innerHTML = `<div class="col-md-4 col-sm-6 portfolio-item">
    // <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
    //   <div class="portfolio-hover">
    //     <div class="portfolio-hover-content">
    //       <i class="fa fa-plus fa-3x"></i>
    //     </div>
    //   </div>
    //   <img class="img-fluid" src=${item.url} alt="">
    // </a>
    // <div class="portfolio-caption">
    //   <h4>${item.name}</h4>
    //   <p class="text-muted">${item.title}</p>
    // </div>
    // </div>`

  }



  // <div class="col-md-4 col-sm-6 portfolio-item">
  //   <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
  //     <div class="portfolio-hover">
  //       <div class="portfolio-hover-content">
  //         <i class="fa fa-plus fa-3x"></i>
  //       </div>
  //     </div>
  //     <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
  //   </a>
  //   <div class="portfolio-caption">
  //     <h4>Threads</h4>
  //     <p class="text-muted">Illustration</p>
  //   </div>
  // </div>





  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict
