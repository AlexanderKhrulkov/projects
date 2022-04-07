let name = 'Тимофей';
let surname = 'Тиунов';
let middle = 'Сергеевич';

let me = {
  name: name,
  surname: surname,
  middleName: middle,
  birthDate: { year: 1991, month: 3, day: 14 },
  occupation: 'Системный архитектор',
  married: true,
  'property with spaces': null,
  // undefined здесь просто для примера, использовать его в качестве
  // значения в своих программах не нужно!
  'property.with.dots': undefined,
};
// создаём новое свойство объекта
me.education = 'НИУ ВШЭ';
// изменяем существующее свойство объекта
me.occupation = 'Безработный';

// те же действия со строками
me['property with spaces'] = 42;
me['property.with.dots'] = 42;

// удаляем свойство из объекта
delete me.education;
delete me['property with spaces'];

// пустой объект
let emptyObj = {};

// получаем значения свойства
let myName = me.name;
let myBirthYear = me.birthDate.year;
let fourtyTwo = emptyObj['property with spaces'];

// значение несуществующего свойства - undefined
let emptyProp = emptyObj.someProp;
