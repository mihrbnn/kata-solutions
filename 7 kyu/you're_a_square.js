
/*Given an integral number, determine if it's a square number.

Examples:
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */


var isSquare = function (n) {
    if (n<0){
      return false; 
    }else if (n===0){
      return true
    } else {
        return Number.isInteger(Math.sqrt(n))
    }  
}





