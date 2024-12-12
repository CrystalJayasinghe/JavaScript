'use strict'

let numbers = []

for(let i = 0; i > -1; i++){
    let integer = parseInt(prompt("Enter Number"))
    if(numbers.includes(integer)){
        console.log("You have entered the same number previously")
        window.alert("You have entered the same number previously")
        numbers.sort()
        numbers.forEach(number => {
            console.log(number)
        })
        break
    }
    numbers[i] = integer
}