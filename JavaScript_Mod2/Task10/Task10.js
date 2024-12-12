'use strict'

const candidates = [];

const candidates_number = parseInt(prompt("Enter the number of candidates"))

for(let i = 0; i < candidates_number; i++){

    let name = prompt("Enter Candidate name")
    candidates.push({name: name, votes: 0})

}

const voters = parseInt(prompt("Enter the number of voters"))

let empty_votes = 0

for(let j = 0; j < voters; j++){
    let vote = (prompt("Who do you vote?"))
    if (vote == ""){
        empty_votes += 1
    } else {
        let voted = candidates.find(c => c.name === vote)
        if (voted) {
            voted.votes += 1
        } else {
            window.alert("Invalid Vote")
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes)
console.log(candidates)
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes`)
candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`)
})