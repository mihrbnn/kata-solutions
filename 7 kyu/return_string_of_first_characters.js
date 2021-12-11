
/*In this challange, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
*/


//First solution

function makeString(s) {
    let newStr = s.split(" ")
    let empty = ""
    for (let i = 0; i < newStr.length; i++){  
        empty += newStr[i][0]           
    }
    return empty 
}


//Second solution
function makeString(s){
    let newStr = s.split(' ').map(x => x[0]).join('')
    return newStr
}






  
