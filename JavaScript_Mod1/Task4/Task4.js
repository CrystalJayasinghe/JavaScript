var name = prompt("Enter Name: ")

number = Math.round(Math.random() * 5)

switch (number) {
    case 1:
        group = "Gryffindor";
        break;
    case 2:
        group = "Slyththerin";
        break;
    case 3:
        group = "Hufflepuff";
        break;
    case 4:
        group = "Ravenclaw";
        break
}

document.querySelector("#team").innerHTML = `${name}, you are ${group}`