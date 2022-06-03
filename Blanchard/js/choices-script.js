// const multiSelect = () => {
//   const element = document.querySelectorAll('.underheader__select');
//   element.forEach(el => {
//     const choices = new Choices(el, {
//       searchEnabled: false,
//       itemSelectText: '',
//       shouldSort: false
//     });
//   })
// }
// multiSelect();

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
});
