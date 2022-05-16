const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: ".pet-button-next",
        prevEl: ".pet-button-prev",
    },
    breakpoints: {
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30
        },      
      // when window width is >= 480px
        768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
        },
      // when window width is >= 320px
        320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        },
    }
  });

