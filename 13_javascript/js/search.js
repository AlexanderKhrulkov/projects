window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#searchButton').addEventListener('click', function() {
    document.querySelector('#searchWindow').classList.toggle('is-active')
  })
  document.querySelector('#searchClose').addEventListener('click', function() {
    document.querySelector('#searchWindow').classList.toggle('is-active')
  })
})
