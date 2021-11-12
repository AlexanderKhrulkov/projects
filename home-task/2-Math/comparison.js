//let a = 13.123456789, b = 2.123, n = 5;
//let a = 13.890123, b = 2.891564, n = 2;
let a = 13.890123, b = 2.891564, n = 3;
let Anorm = Math.floor((a - Math.floor(a)) * Math.pow(10, n));
let Bnorm = Math.floor((b - Math.floor(b)) * Math.pow(10, n));

console.log('Anorm =',Anorm);
console.log('Bnorm =',Bnorm);
console.log('Anorm>Bnorm', Anorm>Bnorm);
console.log('Anorm<Bnorm', Anorm<Bnorm);
console.log('Anorm===Bnorm', Anorm===Bnorm);
console.log('Anorm>=Bnorm', Anorm>=Bnorm);
console.log('Anorm<=Bnorm', Anorm<=Bnorm);