const firstPageBtn = document.querySelector('#firstPage')
const lastPageBtn = document.querySelector('#lastPage')
const disabledFirstPageBtn = function() {
  firstPageBtn.setAttribute('disabled', 'disabled')
};
const disabledLastPageBtn = function() {
  lastPageBtn.setAttribute('disabled', 'disabled')

};
const removeDisabledPageBtn = function() {
  firstPageBtn.removeAttribute('disabled')
  lastPageBtn.removeAttribute('disabled')
};

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 40,
    loop: false,
    on: {
      init: function() {

      },
      reachBeginning: disabledFirstPageBtn,
      reachEnd: disabledLastPageBtn,
      fromEdge: removeDisabledPageBtn,
    },
    grid: {
        fill: "row",
        rows: 2,
      },
      pagination: {
        el: '.current-page',
        type: 'fraction',
        renderFraction: 	function(currentClass, totalClass) {
          return '<span class="' + currentClass + '">' + "</span>";},
      },
    navigation: {
        nextEl: ".next-page",
        prevEl: ".prev-page",
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40
      },
      // when window width is >= 480px
        768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
        grid: {
            fill: "row",
            rows: 3,
          }
        },
        // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
            fill: "row",
            rows: 3,
          }
        },
    }
  });
  

  firstPageBtn.addEventListener('click', ()=>{
    swiper.slideTo(0);
    disabledFirstPageBtn();
  })
  lastPageBtn.addEventListener('click', ()=>{
    swiper.slideTo(100);
    disabledLastPageBtn()
  })
