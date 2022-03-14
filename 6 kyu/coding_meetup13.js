/* You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.

Your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse. */

function isLanguageDiverse(list) {
  const lang = list.map((item) => item.language);
  let counter = { JavaScript: 0, Python: 0, Ruby: 0 };
  for (let i = 0; i < lang.length; i++) {
    if (lang[i] === "JavaScript") {
      counter.JavaScript++;
    } else if (lang[i] === "Python") {
      counter.Python++;
    } else if (lang[i] === "Ruby") counter.Ruby++;
  }
  const length = Object.values(counter).sort();
  return Math.max(...length) / Math.min(...length) <= 2;
}
