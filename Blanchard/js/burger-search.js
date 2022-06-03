window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__mobile-search-button').addEventListener('click', function() {
    document.querySelector('.header__mobile-searchpanel').classList.add('header__mobile-searchpanel-active')
  })
  document.querySelector('.header__mobile-search-close').addEventListener('click', function() {
    document.querySelector('.header__mobile-searchpanel').classList.remove('header__mobile-searchpanel-active')
  })
})
