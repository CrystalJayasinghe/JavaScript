function rollDice(numDice) {
    let sum = 0;
    for (let i = 0; i < numDice; i++) {
        sum += Math.floor(Math.random() * 6) + 1; // Random roll from 1 to 6
    }
    return sum;
}

function calculateProbability() {
    const numDice = parseInt(document.getElementById("numDice").value);
    const targetSum = parseInt(document.getElementById("targetSum").value);
    const resultElement = document.getElementById("result");
    const numSimulations = 10000; // Number of simulations to run

    if (isNaN(numDice) || isNaN(targetSum) || numDice < 1 || targetSum < 1) {
        resultElement.textContent = "Please enter valid positive numbers for dice and sum.";
        return;
    }

    let successCount = 0;

    for (let i = 0; i < numSimulations; i++) {
        if (rollDice(numDice) === targetSum) {
            successCount++;
        }
    }

    const probability = (successCount / numSimulations) * 100;
    resultElement.textContent = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
}
