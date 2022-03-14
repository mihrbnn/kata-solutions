/* You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign - up form. */

function orderFood(list) {
  const a = list.map((item) => item.meal);
  const result = {};
  for (let i in a) {
    if (result[a[i]] == undefined) result[a[i]] = 0;
    result[a[i]]++;
  }
  return result;
}
