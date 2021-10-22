document.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters

        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters

        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
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