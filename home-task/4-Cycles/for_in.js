let rating = ['Катя', 'Вася', 'Маша', 'Петя', 'Лена'];

console.log('Рейтинг студентов:');

for (let i in rating) {
  // eslint-disable-next-line radix
  console.log(`${parseInt(i) + 1} место ${rating[i]}`);
}
