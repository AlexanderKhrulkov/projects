let mass = [];
let m = 0;
let n = 100;
/* let m = 2;
let n = 5; */
/* let m = 100;
let n = -5; */
/* let m = -3;
let n = -10; */
let min = Math.min(m, n);
let max = Math.max(m, n);
let count = 100;
// let count = 50;
// let count = 70;
// let count = 42;
for (let i = 1; i <= count; ++i) {
  mass.push(Math.round(Math.random() * (max - min) + min));
}
console.log(mass);
