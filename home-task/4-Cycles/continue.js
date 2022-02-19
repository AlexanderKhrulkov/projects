// Колода
let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама'];
// Карты в руке
let hand = [];

for (let card of cards) {
  // Выполняем только для нечётного индекса
  // eslint-disable-next-line no-continue
  if (card !== 'Король' && card !== 'Туз') continue;
  hand.push(card);
  console.log(`Карта ${card} добавлена в руку`);
}

console.log('Карты в руке', hand);
