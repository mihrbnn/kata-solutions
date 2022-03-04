// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object(associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

function countLanguages(list) {
  const count = {};
  list.forEach((obj) => {
    count[obj.language] = (count[obj.language] || 0) + 1;
  });
  return count;
}
