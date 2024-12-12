'use strict'

let number = parseInt(prompt("Enter the number of participants"))
let participants = []

for(let i = 0; i < number; i++){
    let name = prompt("Enter the name")
    participants[i] = name
}

participants.sort()

const list = document.querySelector("#list")

participants.forEach(participant => {
    list.innerHTML += `<li>${participant}</li>`
})