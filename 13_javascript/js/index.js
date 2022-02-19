//import Swiper, { pagination, a11y } from 'swiper';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'К слайду {{index}}',
  },

});
