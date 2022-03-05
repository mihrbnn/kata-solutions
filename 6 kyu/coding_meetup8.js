// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.

function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const zones = list.map((item) => item.continent);
  const intersection = continents.filter((element) => zones.includes(element));
  return intersection.length === 5 ? true : false;
}
