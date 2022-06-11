document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalogue__artist-button').forEach(function (stepItem) {
    stepItem.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalogue__painter-info').forEach(function (info) {
        info.classList.remove('is-active')
      })
      document.querySelectorAll('.catalogue__artist-button').forEach(function (removeActive) {
        removeActive.classList.remove('catalogue__artist-button-active')
      })
      this.classList.toggle('catalogue__artist-button-active')
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active')
    })

    // stepItem.addEventListener('click', function (event) {
    //   const path = event.currentTarget.dataset.path

    //   document.querySelectorAll('.catalogue__artist-button').forEach(function (stepFocus) {
    //     stepFocus.classList.remove('section-work__step-item-focus')
    //   })
    //   document.querySelector(`[data-focus="${path}"]`).classList.add('section-work__step-item-focus')
    // })
  })
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
})
