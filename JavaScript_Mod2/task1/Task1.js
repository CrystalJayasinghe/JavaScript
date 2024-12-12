'use strict'

let arr = []

for(let i = 0; i < 5; i++){
    let num = parseInt(prompt(`Enter Number ${i+1}`))
    arr[i] = num
}

for(let j = 4; j > -1; j--){
    console.log(arr[j])
}