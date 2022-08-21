document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.compare__item');
    if(items.length > 4) {
        document.querySelector('.compare__section .compare__slider-prev').style.display = "flex";
        document.querySelector('.compare__section .compare__slider-next').style.display = "flex";
        const compareSwiper = new Swiper('.compare__swiper' , {
            slidesPerView: 4,
            loop: false,
            roundLengths: true,
            navigation: {
                nextEl: ".compare__section .compare__slider-next",
                prevEl: ".compare__section .compare__slider-prev",
            },
            pagination: {
                el: ".compare__pagination",
                bulletClass: "slider-bullet",
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                700: {
                  slidesPerView: 2
                },
                991: {
                  slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                }
            },
        }); 
    } else {
        document.querySelector('.compare__section .compare__slider-prev').style.display = "none";
        document.querySelector('.compare__section .compare__slider-next').style.display = "none";
    }
});