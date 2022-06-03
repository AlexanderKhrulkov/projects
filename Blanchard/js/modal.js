document.querySelectorAll('.gallery__swiper-slide').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path


    document.querySelectorAll('.gallery__modal').forEach(function(btn) {
      btn.classList.remove('modal-active')
    })

    document.querySelector(`[data-target="${path}"]`).classList.add('modal-active');
    document.body.style.overflow = 'hidden';
    window.addEventListener('click', e => {
      const target = e.target
      if (!target.closest('.gallery__modal-img') && !target.closest('.gallery__modal-text') && !target.closest('.gallery__swiper-slide')) {
        document.querySelectorAll('.gallery__modal').forEach(function(btn) {
          btn.classList.remove('modal-active');
          document.body.removeAttribute('style');
        })
      }
    })
  });
});
