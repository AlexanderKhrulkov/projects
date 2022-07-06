//burger
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.add('header__nav-active')
  })
  document.querySelector('.burger-close').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.remove('header__nav-active')
  })
})

//modal-window
document.querySelectorAll('.buy-button').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function() {
    document.querySelector('.order-tips__modal').classList.add('order-tips__modal-active');
    document.body.style.overflow = 'hidden';
  });
});
document.querySelectorAll('.order-tips__modal-close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    document.querySelector('.order-tips__modal').classList.remove('order-tips__modal-active');
    document.body.removeAttribute('style');
  })
})

//smooth-scroll
const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
