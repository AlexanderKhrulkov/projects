let n = 0, m = 100;
let range = Math.abs(m - n);
let NumberInRange = Math.round(Math.random()*range);
let min = Math.min(n, m);
let EvenRandom = min + NumberInRange / 2;
let OddRandom = Math.round(EvenRandom) * 2 + 1;
console.log(OddRandom);
/* При данном решении генератор случайных чисел может выдать 101. 
Если в переменной OddRandom + заменить на -, то вместо 101 генератор будет выдавать -1 */