'use strict'

let dogs = []

for(let i = 0; i < 6; i++){
    let name = prompt("Enter Dog Name")
    dogs[i] = name
}

dogs.sort()
dogs.reverse()
const list = document.querySelector("#list")

dogs.forEach(dog => {
    list.innerHTML += `<li>${dog}</li>`
})