document.querySelectorAll('.footer__input').forEach(activity => {
  activity.addEventListener('click', function () {
    let btn = this;

    document.querySelectorAll('.footer__input').forEach(allOff => {
      allOff.classList.remove('footer__input-active')
    })
    btn.classList.add('footer__input-active')
  })
})
