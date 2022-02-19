let string = 'Привет, мир!';
let revString = '';
for (let i = string.length - 1; i >= 0; --i) {
  revString += string[i];
}
console.log(revString);
