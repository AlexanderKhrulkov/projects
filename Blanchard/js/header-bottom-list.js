// window.addEventListener('DOMContentLoaded', function () {
//   const element = document.querySelectorAll('.underheader__button');
//   element.forEach(el => {
//     el.addEventListener('click', function () {
//       const select = document.querySelectorAll('.underheader__select');
//       select.forEach(sel => {
//         sel.classList.toggle('is-active');
//       })
//     })
//   })
// })

// window.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('.realism-button').addEventListener('click', function() {
//     const selCon = document.querySelectorAll('.underheader__select-container');
//     selCon.forEach(el => {
//       el.classList.remove('is-active')
//     });
//     document.querySelector('.realism-select').classList.toggle('is-active');
//   })
//   document.querySelector('.impressionism-button').addEventListener('click', function() {
//     document.querySelector('.impressionism-select').classList.toggle('is-active')
//   })
//   document.querySelector('.postimpressionism-button').addEventListener('click', function() {
//     document.querySelector('.postimpressionism-select').classList.toggle('is-active')
//   })
//   document.querySelector('.avangard-button').addEventListener('click', function() {
//     document.querySelector('.avangard-select').classList.toggle('is-active')
//   })
//   document.querySelector('.futurism-button').addEventListener('click', function() {
//     document.querySelector('.futurism-select').classList.toggle('is-active')
//   })
// })

document.querySelectorAll('.header__button').forEach(dropdownsItem => {
  dropdownsItem.addEventListener('click', function () {
    let btn = this;
    let dropdown = btn.parentElement.querySelector('.header__select-container');
    // document.querySelectorAll('.header__button').forEach(el => {
    //     if (el != btn) {
    //         el.classList.remove('is-active');
    //     }
    // });
    document.querySelectorAll('.header__select-container').forEach(el => {
      if (el != dropdown) {
        el.classList.remove('is-active');
      }
    })
    btn.classList.toggle('header__button-active')
    dropdown.classList.toggle('is-active')
  })
})
