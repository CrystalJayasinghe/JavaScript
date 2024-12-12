'use strict'

function even(numbers){
    let evens = []
    for(let i = 0; i < numbers.length; i++){
        let remainder = numbers[i]%2
        if(remainder == 0){
            evens.push(numbers[i])
        }
    }
    return evens
}

function main(){
    let numbers = [1, 2, 3, 4, 5, 6 , 7, 8, 9]


    console.log(`Original array: ${numbers}`)
    console.log(`Modified array: ${even(numbers)}`)
}

main()