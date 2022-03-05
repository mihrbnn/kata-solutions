// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

function findSenior(list) {
  const sortAges = list.sort(function (a, b) {
    return b.age - a.age;
  });
  const oldest = sortAges.filter((e) => e.age >= sortAges[0].age);
  return oldest;
}
