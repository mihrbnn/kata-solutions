
/* In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty
If all rooms are busy, return "None available!" */


//First Solution

function meeting(x) {
    if (x.includes('O')){
    const findEmptyRoom = (x.find(room => room.includes('O')))
    return x.indexOf(findEmptyRoom)
    }else {
      return 'None available!'
    }
}

//Second Solution

function meeting(x){
    var idx = x.indexOf("O");
    return idx === -1 ? "None available!": idx
}
console.log(meeting(['X', 'X', 'O', 'X', 'X']))

