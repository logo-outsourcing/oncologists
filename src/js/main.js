


$('.header__mobile--button').click(function (e) {
    e.preventDefault();
    $('.header__mobile--button').toggleClass('is-active');
    $('.header__mobile--wrap').toggleClass('header__mobile--open');
    $('body').toggleClass('overflow');
});
$('#menu-association').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__association').toggleClass('header__mobile--open');
});
$('#menu-association-close').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__association').toggleClass('header__mobile--open');
});
$('#menu-activity').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__activity').toggleClass('header__mobile--open');
});
$('#menu-activity-close').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__activity').toggleClass('header__mobile--open');
});
$('#menu-specialists').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__specialists').toggleClass('header__mobile--open');
});
$('#menu-specialists-close').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__specialists').toggleClass('header__mobile--open');
});
$('#menu-help').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__help').toggleClass('header__mobile--open');
});
$('#menu-help-close').click(function (e) {
    e.preventDefault();
    $('.header__mobile--menu').toggleClass('header__mobile--close');
    $('.header__help').toggleClass('header__mobile--open');
});

var swiper = new Swiper('.swiper-container.conference__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 1,
    initialSlide: 1,
    centeredSlides: true,
    loop: false,
    pagination: {
        el: '.swiper-pagination.conference__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },

    },
    navigation: {
        nextEl: '.conference__slider-next',
        prevEl: '.conference__slider-prev',
    } ,
});

var swiper = new Swiper('.swiper-container.tidings__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 1,
    initialSlide: 1,
    centeredSlides: true,
    loop: false,
    pagination: {
        el: '.swiper-pagination.tidings__pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.tidings__slider-next',
        prevEl: '.tidings__slider-prev',
    } ,
});

var swiper = new Swiper('.swiper-container.partners__slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
    },
    navigation: {
        nextEl: '.partners__next',
        prevEl: '.partners__prev',
    } ,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});
