function rollDice() {
    const diceCount = parseInt(document.getElementById("diceCount").value);
    if (isNaN(diceCount) || diceCount < 1) {
        document.getElementById("result").textContent = "Please enter a valid number of dice rolls.";
        return;
    }

    let sum = 0;
    for (let i = 0; i < diceCount; i++) {
        sum += Math.floor(Math.random() * 6) + 1; // Simulates a die roll (1-6)
    }

    document.getElementById("result").textContent = `The sum of ${diceCount} dice rolls is: ${sum}`;
    console.log(`The sum of ${diceCount} dice rolls is: ${sum}`);
}
