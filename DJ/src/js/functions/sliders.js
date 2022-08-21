const card_slider_1 = new Swiper('.card__slider[data-section-number="1"]', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: ".card__pagination-1",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".card__section .card__slider-next",
        prevEl: ".card__section .card__slider-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    },
});

const card_slider_2 = new Swiper('.card__slider[data-section-number="2"]', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,
    pagination: {
        el: ".card__pagination-2",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".card__section .card__slider-next--second",
        prevEl: ".card__section .card__slider-prev--second",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    },
})

const stock_slider = new Swiper('.stock__slider', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 24,
    pagination: {
        el: ".stock__pagination",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".stock__next",
        prevEl: ".stock__prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
})

const news_slider = new Swiper('.news__slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 24,
    pagination: {
        el: ".news__pagination",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".news__slider-next",
        prevEl: ".news__slider-prev",
    },
    breakpoints: {

        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})

const video_slider = new Swiper('.video__slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 24,
    pagination: {
        el: ".video__pagination",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".video__slider-next",
        prevEl: ".video__slider-prev",
    },
    breakpoints: {

        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})
