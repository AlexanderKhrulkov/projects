let me = {
  name: 'Тимофей',
};

// подмешиваем свойства в свежесозданный пустой объект...
let newMe = Object.assign({}, me, { name: 'Не Тимофей', surname: 'Не Тиунов' });

// или делаем то же самое с помощью spread
let newMeWithSpread = {...me, name: 'Не Тимофей', surname: 'Не Тиунов' };

// исходный объект остался нетронутым
console.log(me);
