'use strict'

'use strict'

function dice(sides){
    let num = Math.floor(Math.random()*sides+1)
    return num
}

let arr = []

const list = document.querySelector("#list")

function main(){
    let sides = parseInt(prompt("Enter the number of sides of the dice"))
    for(let i = 0; i > -1; i++){
        let number = dice(sides)
        arr[i] = number
        if (number == sides){
            arr.forEach(number=>{
                list.innerHTML += `<li>${number}</li>`
            })
            break
        }
    }
}
main()