window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__burger-button').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.toggle('header__nav-active')
    // document.querySelector('body').classList.toggle('body-fixed')
  })
  document.querySelector('.header__close-button').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.toggle('header__nav-active')
    // document.querySelector('body').classList.toggle('body-fixed')
  })
  document.querySelectorAll('.header__nav-link').forEach(function (closeAnchor) {
    closeAnchor.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.header__nav').forEach(function(btn) {
        btn.classList.remove('header__nav-active')
      })
    })
  })
})
