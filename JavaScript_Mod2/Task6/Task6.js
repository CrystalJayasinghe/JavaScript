'use strict'

function dice(){
    let num = Math.floor(Math.random()*7)
    return num
}

let arr = []

const list = document.querySelector("#list")

function main(){
    for(let i = 0; i > -1; i++){
        let number = dice()
        arr[i] = number
        if (number == 6){
            arr.forEach(number=>{
                list.innerHTML += `<li>${number}</li>`
            })
            break
        }
    }
}
main()