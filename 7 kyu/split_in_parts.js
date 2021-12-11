/*The aim of this challenge is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:
Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
*/

var splitInParts = function (s, partLength) {
    var a = new RegExp('.{1,' + partLength + '}', 'g');
    var str = s.match(a).join(" ")
    return str
} 
console.log(splitInParts("alsjflf",2))


