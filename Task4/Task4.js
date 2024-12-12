'use strict'

let number;
let numbers = []
let i = 0

do {
    number = parseInt(prompt("Enter Number"))
    if (number == 0){
        break
    }
    numbers[i] = number
    i++
} while (number !== 0)

numbers.sort()
numbers.reverse()
for(let j = 0; j < numbers.length; j++){
    console.log(numbers[j])
}