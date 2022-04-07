/* eslint-disable no-console */
function printObjectProperty(obj, propName) {
  console.log(obj[propName]);
}

let me = {
  name: 'Тимофей',
  surname: 'Тиунов',
  middleName: 'Сергеевич',
  birthDate: { year: 1991, month: 3, day: 14 },
  occupation: 'Системный архитектор',
  married: true,
};

printObjectProperty(me, 'name'); // Тимофей
printObjectProperty(me, 'middleName'); // Сергеевич
