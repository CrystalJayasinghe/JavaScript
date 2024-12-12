'use strict'

let leap;
var year = parseInt(prompt("Enter the Year: "))

if(year % 4 == 0){
    leap = "is a leap year"
}
else if (year % 100 == 0 && year % 400 == 0){
    leap = "is a leap year"
}
else {
    leap = "is not a leap year"
}

document.querySelector("#Leap_year").innerHTML = `Year ${year},  ${leap}`