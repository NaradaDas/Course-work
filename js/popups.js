document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".header__button").addEventListener('click', function() {
      document.querySelector('body').classList.add('popup-open')
        document.querySelector('.header__nav-popup').classList.add('open')
        document.querySelector('.header__button').classList.add('active')
    });
    document.querySelector('.header__close').addEventListener('click', function() {
      document.querySelector('body').classList.remove('popup-open')
        document.querySelector('.header__nav-popup').classList.remove('open')
        document.querySelector('.header__button').classList.remove('active')
    })

    document.querySelectorAll('.header__nav-link').forEach(function(popupClose) {

        popupClose.addEventListener('click', function() {
          document.querySelector('body').classList.remove('popup-open')
            document.querySelector('.header__nav-popup').classList.remove('open')
            document.querySelector('.header__button').classList.remove('active')
        })
    })
    document.querySelector('.search__btn').addEventListener('click', function() {
      document.querySelector('body').classList.add('popup-open')

        document.querySelector('.search__popup').classList.add('open')
        document.querySelector('.search__btn').classList.add('active')
    });
    document.querySelector('.popup__close').addEventListener('click', function() {
      document.querySelector('body').classList.remove('popup-open')

        document.querySelector('.search__popup').classList.remove('open')
        document.querySelector('.search__btn').classList.remove('active')
    })

    document.querySelector('.search__close').addEventListener('click', function() {
      document.querySelector('body').classList.remove('popup-open')

        document.querySelector('.search__popup').classList.remove('open')
        document.querySelector('.search__btn').classList.remove('active')
    })


    // const popupLinks = document.querySelectorAll('.popup-link');
    // const body = document.querySelector('body');
    // const lockPadding = document.querySelectorAll(".lock-padding");

    // let unlock = true;

    // const timeout = 400;

    // if (popupLinks.length > 0) {
    //     for (let index = 0; index < popupLinks.length; index++) {
    //         const popupLink = popupLinks[index];
    //         popupLink.addEventListener("click", function(e) {
    //             const popupName = popupLink.getAttribute('href').replace('#', '');
    //             const curentPopup = document.getElementById(popupName);
    //             popupOpen(curentPopup);
    //             e.preventDefault();

    //         });
    //     }
    // }

    // const popupCloseIcon = document.querySelectorAll('.popup__close');
    // if (popupCloseIcon.length > 0) {
    //     for (let index = 0; index < popupCloseIcon.length; index++) {
    //         const el = popupCloseIcon[index];
    //         el.addEventListener('click', function(e) {
    //             popupClose(el.closest('.popup'));
    //             e.preventDefault();
    //         });
    //     }
    // }

    // function popupOpen(curentPopup) {
    //     if (curentPopup && unlock) {
    //         const popupActive = document.querySelector('.popup.open');
    //         if (popupActive) {
    //             popupClose(popupActive, false);
    //         } else {
    //             bodyLock();
    //         }
    //         curentPopup.classList.add('open');
    //         curentPopup.addEventListener("click", function(e) {
    //             if (!e.target.closest('.popup__content')) {
    //                 popupClose(e.target.closest('.popup'));
    //             }
    //         });
    //     }
    // }

    // function popupClose(popupActive, doUnlock = true) {
    //     if (unlock) {
    //         popupActive.classList.remove('open');
    //         if (doUnlock) {
    //             bodyUnlock();
    //         }
    //     }
    // }

    // function bodyLock() {
    //     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    //     if (lockPadding.length > 0) {
    //         for (let index = 0; index < lockPadding.length; index++) {
    //             const el = lockPadding[index];
    //             el.style.paddingRight = lockPaddingValue;
    //         }
    //     }

    //     body.style.paddingRight = lockPaddingValue;
    //     body.classList.add('lock');

    //     unlock = false;
    //     setTimeout(function() {
    //         unlock = true;
    //     }, timeout);
    // }

    // function bodyUnlock() {
    //     setTimeout(function() {
    //         if (lockPadding.length > 0) {
    //             for (let index = 0; index < lockPadding.length; index++) {
    //                 const el = lockPadding[index];
    //                 el.style.paddingRight = '0px';
    //             }
    //         }
    //         body.style.paddingRight = '0px';
    //         body.classList.remove('lock');
    //     }, timeout);
    //     unlock = false;
    //     setTimeout(function() {
    //         unlock = true;
    //     }, timeout);
    // }



    // document.addEventListener('keydown', function(e) {
    //     if (e.which === 27) {
    //         const popupActive = document.querySelector('.popup.open');
    //         popupClose(popupActive);
    //     }
    // })


})