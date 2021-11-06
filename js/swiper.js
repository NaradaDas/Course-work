document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('#swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination


    // Navigation arrows


    // And if we need scrollbar

  });



  const swiper2 = new Swiper('#swiper2', {
    // Optional parameters

    loop: true,

    // If we need pagination


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

      breakpoints: {
        // when window width is >= 320px
        576: {
          slidesPerView: 2,
          spaceBetween: 34
        }

    }
  })
})
      // And if we need scrollbar





