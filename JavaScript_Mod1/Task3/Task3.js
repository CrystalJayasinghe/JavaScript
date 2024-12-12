'use strict'
const num1 = parseInt(prompt("Number 01: "))
const num2 = parseInt(prompt("Number 02: "))
const num3 = parseInt(prompt("Number 03: "))

var total = num1 + num2 + num3
var avg = (num1+num2+num3)/3
var product = num1 * num2 * num3

document.querySelector("#sum").innerHTML = `Sum is ${total}`
document.querySelector("#product").innerHTML = 'Product is ' + product
document.querySelector("#average").innerHTML = 'Average is ' + avg