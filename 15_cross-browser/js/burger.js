window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector('#burgerClose').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
})
