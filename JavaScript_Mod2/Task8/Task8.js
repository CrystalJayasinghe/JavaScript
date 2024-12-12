'use strict'

function concat(array){
    let long = ""
    for(let i = 0; i < array.length; i++){
        long += array[i]
    }
    return long
}

function main(){
    let names = ["Johnny", "DeeDee","Joey", "Marky"]
    document.querySelector("#print").innerHTML = concat(names)
}

main()