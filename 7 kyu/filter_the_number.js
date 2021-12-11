//You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


var FilterString = function (value) {
  let arraym=value.split("");
  let emptyStr=""
  for(let i=0;i<arraym.length;i++){
    if(!isNaN(arraym[i])){
      emptyStr+=arraym[i]
    }
  }return Number(emptyStr)
}

