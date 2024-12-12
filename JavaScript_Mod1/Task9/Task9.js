function checkPrime() {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");

    if (isNaN(number) || number < 2) {
        resultElement.textContent = "Please enter an integer greater than or equal to 2.";
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultElement.textContent = `${number} is a prime number.`;
    } else {
        resultElement.textContent = `${number} is not a prime number.`;
    }
}
