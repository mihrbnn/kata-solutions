// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  const last = str.match(/(..?)/g);
  if (str.length === 0) {
    return [];
  } else if (str.length % 2 === 0) {
    return last;
  } else {
    const a = last.splice(-1) + "_";
    last.push(a);
    return last;
  }
}
