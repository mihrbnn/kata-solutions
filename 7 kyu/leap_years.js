
/* years divisible by 4 are leap years
// but years divisible by 100 are not leap years
but years divisible by 400 are leap years*/

function isLeapYear(year) {
    if((year%400==0) || (year%4==0 && year%100!== 0)){
      return true
    }else {
      return false
    }
}

