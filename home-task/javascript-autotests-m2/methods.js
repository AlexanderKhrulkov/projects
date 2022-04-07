/* eslint-disable no-console */
let me = {
  birthDate: { year: 1991, month: 3, day: 14 },
  getAge() {
    let now = new Date();
    let born = new Date(
      this.birthDate.year,
      this.birthDate.month + 1,
      this.birthDate.day,
    );
    let diffInMilliseconds = now.getTime() - birthDate.getTime();
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  },
  // другие свойства...
};

console.log(me.getAge());
