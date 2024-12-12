'use strict'

let text = "Should I calculate the square root"
let result

if (confirm(text) == true){
    var num = parseInt(prompt("Enter the number: "))
    if (num > 0) {
        result = Math.sqrt(num)
        var output = `The square root is ${result}`
    }
    else if (num < 0){
        var output = `The square root of a negative number is not defined`
    }
}
else {
    var output = `The square root is not calculated`
}

document.querySelector("#result").innerHTML = `${output}`