document.addEventListener('DOMContentLoaded', function() {
    let gallerySlider = new Swiper(".slides-container", {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 20,
        pagination: {
            el: ".gallery .gallery__pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".gallery__next",
            prevEl: ".gallery__prev"
        },

        breakpoints: {
            441: {
                slidesPerView: 2,
                grid: {
                    rows: 2
                },
                spaceBetween: 30
            },

            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 2
                },
                spaceBetween: 50
            }
        },

        a11y: false

        // on: {
        //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
        //   beforeResize: function () {
        //     this.slides.forEach((el) => {
        //       el.style.marginTop = "";
        //     });
        //   }
        // }
    });

})