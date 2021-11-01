document.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper('#swiper', {
        // Optional parameters

        loop: true,

        // If we need pagination


        // Navigation arrows


        // And if we need scrollbar

    });


    const swiper1 = new Swiper('#swiper1', {
        // Optional parameters

        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',

            clickable: true,

        },

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

      // And if we need scrollbar

  });

    // const swiper = new Swiper('.swiper-container', {
    //   // Optional parameters
    //   loop: true,

    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },




    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    //   // And if we need scrollbar
    //   scrollbar: {
    //     hide: true,

    //   },

    //   effect: 'slide'

    // });
})
