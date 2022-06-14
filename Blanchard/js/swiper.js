const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 1,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  // a11y: {
  //   paginationBulletMessage: 'К слайду {{index}}',
  // },

});

const gallerySwiper = new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,

  direction: 'horizontal',
  spaceBetween: 50,
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    652: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    220: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    }
  }

});

const eventsSwiper = new Swiper('.events__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  pagination: {
    el: ".events__swiper-pagination",
    // bulletClass: ".events__swiper-pagination-bullet",
    // bulletActiveClass: ".events__swiper-pagination-bullet-active",
    type: "bullets",
    // dynamicBullets: true,
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    652: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    219: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  }
});

const projectsSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 3,
  spaceBetween: 43,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  breakpoints: {
    1250: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    652: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    219: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
  }
})
