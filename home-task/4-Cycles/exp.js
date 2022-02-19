// function januaryDays(firstWeekDay) {
//   // eslint-disable-next-line max-len
//   let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//   let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
//   let firstDay = 'среда';
//   let indexWeek = week.indexOf(firstDay);

//   for (let day = 1; day <= month.length; ++day) {
//     let x = (indexWeek + day - 1) % 7;
//     console.log(`${day} января ${week[x]}`);
//   }
// }
// januaryDays('среда');

let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let firstDay = 'среда';
let indexWeek = week.indexOf(firstDay);
console.log(indexWeek);

for (let day = 1; day <= month.length; ++day) {
    let x = (indexWeek + day - 1) % 7;
        console.log(`${day} января ${week[x]}`);
}
