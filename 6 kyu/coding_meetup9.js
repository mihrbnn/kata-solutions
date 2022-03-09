// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

function isAgeDiverse(list) {
  const continents = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const ages = list.map((item) => item.age);
  const ageFilter = ages.some((item) => item.toString().length >= 3);
  const intersection = continents.every((element) =>
    ages.some((item) => item.toString()[0].includes(element))
  );

  return intersection && ageFilter;
}
