//let n = 0, m = 100;
let n = 2, m = 5;
//let n = 100, m = -5;
//let n = -3, m = -10;
let range = Math.abs(m - n);
let NumberInRange = Math.floor(Math.random()*range);
let min = Math.min(n, m);
let random = min + NumberInRange;
let EvenRandom = random - (random % 2);
let OddRandom = Math.floor(EvenRandom - ((EvenRandom - 1) % 2));
console.log(OddRandom);
/* При данном решении генератор случайных чисел может выдать нечетное число, 
не входящее в диапазон  n, m, и равное (n, m) +- 1 (+ или - в зависимости от
знака в переменной OddRandom) */