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
            576: {
                slidesPerView: 2,
                grid: {
                    rows: 2
                },
                spaceBetween: 34
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

    document.querySelectorAll('.gallery__slide').forEach(function(slideBtn) {
        slideBtn.addEventListener('click', function(event) {
            const slide = event.currentTarget.dataset.slide
            document.querySelectorAll('.gallery__slide').forEach(function(slideRemove) {
                slideRemove.classList.remove('active')
            })
            document.querySelector(`[data-window="${slide}"]`).classList.add('active')
            document.querySelector('body').classList.add('modal-open')
        })


    })


    document.querySelectorAll('.gallery__popup-close').forEach(function(popupClose) {
        popupClose.addEventListener('click', function() {

            document.querySelector('.gallery__popup.active').classList.remove('active')
            document.querySelector('body').classList.remove('modal-open')
        })
    })
    document.querySelectorAll('.gallery__popup-close-back').forEach(function(popupClose) {

        popupClose.addEventListener('click', function() {

            document.querySelector('.gallery__popup.active').classList.remove('active')
            document.querySelector('body').classList.remove('modal-open')
        })
    })

    new SimpleBar(document.getElementById('galleryPopupF'));
    new SimpleBar(document.getElementById('galleryPopupS'));
    new SimpleBar(document.getElementById('galleryPopupTh'));
    new SimpleBar(document.getElementById('galleryPopupFo'));
    new SimpleBar(document.getElementById('galleryPopupFi'));
    new SimpleBar(document.getElementById('galleryPopupSi'));
    new SimpleBar(document.getElementById('galleryPopupSe'));
    new SimpleBar(document.getElementById('galleryPopupE'));
    new SimpleBar(document.getElementById('galleryPopupN'));
    new SimpleBar(document.getElementById('galleryPopupT'));
    new SimpleBar(document.getElementById('galleryPopupEl'));
    new SimpleBar(document.getElementById('galleryPopupTw'));
    new SimpleBar(document.getElementById('galleryPopupTteenth'));
    new SimpleBar(document.getElementById('galleryPopupFoteenth'));
    new SimpleBar(document.getElementById('galleryPopupFiteenth'));
    new SimpleBar(document.getElementById('galleryPopupSiteenth'));
    new SimpleBar(document.getElementById('galleryPopupSeteenth'));
    new SimpleBar(document.getElementById('galleryPopupEteenth'));
    new SimpleBar(document.getElementById('galleryPopupNteenth'));
    new SimpleBar(document.getElementById('galleryPopupTwth'));
    new SimpleBar(document.getElementById('galleryPopupTwF'));
    new SimpleBar(document.getElementById('galleryPopupTwS'));
    new SimpleBar(document.getElementById('galleryPopupTwT'));
    new SimpleBar(document.getElementById('galleryPopupTwFo'));



})
