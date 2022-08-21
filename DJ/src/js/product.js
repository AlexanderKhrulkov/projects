
if ( document.querySelector('.product') ) {
    const productSlider = new Swiper(".product__slider", {
        direction: "vertical",
        loop: true,
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper2 = new Swiper(".product__img", {
        spaceBetween: 10,
        oop: true,
        thumbs: {
            swiper: productSlider,
        },
    });
}

const modific__slider = new Swiper(".modific__slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
        el: ".card__pagination-1",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".card__slider-next",
        prevEl: ".card__slider-prev",
    },
    breakpoints: {
        575: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
})

const materials__slider = new Swiper(".materials__slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
        el: ".materials__pagination",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".materials__slider-next",
        prevEl: ".materials__slider-prev",
    },
    breakpoints: {
        575: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
})

const recently__slider = new Swiper(".recently__slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    direction: 'horizontal',
    pagination: {
        el: ".recently__pagination",
        bulletClass: "slider-bullet",
        clickable: true
    },
    navigation: {
        nextEl: ".recently__slider-next",
        prevEl: ".recently__slider-prev",
    },
    breakpoints: {
        575: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
})


let lines = document.querySelectorAll('.comments__banner-line');
lines.forEach(el => {
    let percent = String(el.nextElementSibling.innerHTML)
    el.firstElementChild.style.width = percent;
})