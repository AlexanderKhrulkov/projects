document.querySelectorAll('.projects__tooltip').forEach (tooltipClick => {
  tooltipClick.addEventListener('click', function () {
    let btn = this;
    let popup = btn.querySelector('.projects__tooltip-popup');
    document.querySelectorAll('.projects__tooltip-popup').forEach(el => {
      if (el != popup) {
        el.classList.remove('popup-active');
      }
    })
    popup.classList.toggle('popup-active');
  })
})
