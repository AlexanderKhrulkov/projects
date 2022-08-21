if(document.querySelectorAll('.card__icon-compare')){
  document.querySelectorAll('.card__icon-compare').forEach((el) => {
    el.addEventListener('click', function() {
      el.querySelector('.card__icon-tooltip').style.opacity = '1';
      el.querySelector('.card__icon-tooltip').style.visibility = 'visible';
      setTimeout(function(){
        el.querySelector('.card__icon-tooltip').style.opacity = '0';
      }, 2000)
      setTimeout(function() {
        el.querySelector('.card__icon-tooltip').style.visibility = 'hidden';
      }, 3000)
    });
  });
};