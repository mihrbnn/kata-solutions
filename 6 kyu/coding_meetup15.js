/* You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
] */

function findOddNames(list) {
  let oddName = [];
  list.forEach((item) => {
    let name = item.firstName;
    let nameAscSum = 0;
    for (i = 0; i < name.length; i++) {
      nameAscSum += name.charCodeAt(i);
    }
    nameAscSum % 2 === 1 && oddName.push(item);
  });
  return oddName;
}
