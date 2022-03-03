
/* Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm
You will be given two arrays with these numbers (one for Friday and one for Saturday night). 
Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost
*/

function lostSheep(friday, saturday, total) {
  const sumFriday = friday.reduce((a, b) => a + b, 0);
  const sumSaturday = saturday.reduce((a, b) => a + b, 0);
  const lostSheeps = total - (sumFriday + sumSaturday);
  return lostSheeps;
}


