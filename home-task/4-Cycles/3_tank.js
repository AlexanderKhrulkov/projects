let roadMines = [false, false, true, true, false, false, false, false, false, false];
let damage = false;

for (let position = 0; position < roadMines.length; ++position) {
  console.log(`танк переместился на ${position + 1}`);
  if (roadMines[position]) {
    if (damage) {
      console.log('танк уничтожен');
      break;
    // eslint-disable-next-line brace-style
    }
    else {
      damage = true;
      console.log('танк поврежден');
    }
  }
}
