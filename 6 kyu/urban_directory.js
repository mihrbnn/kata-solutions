// Design a data structure that supports the following two operations:

// addWord (or add_word) which adds a word,
// search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter

var WordDictionary = function () {
  this.arr = [];
};

WordDictionary.prototype.addWord = function (word) {
  this.arr.push(word);
};

WordDictionary.prototype.search = function (word) {
  let reg = new RegExp("^" + word + "$");
  return this.arr.find((v) => reg.test(v)) !== undefined;
};
