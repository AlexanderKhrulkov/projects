document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-work__step-item').forEach(function(stepItem) {
    stepItem.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-work__content-picture').forEach(function (contentPic) {
        contentPic.classList.remove('section-work__content-picture-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-work__content-picture-active')
    })
    stepItem.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-work__step-item').forEach(function (stepFocus) {
        stepFocus.classList.remove('section-work__step-item-focus')
      })
      document.querySelector(`[data-focus="${path}"]`).classList.add('section-work__step-item-focus')
    })
  })
})
