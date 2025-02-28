function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operator = document.getElementById("operator").value;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let result;
    switch (operator) {
        case "Addition":
            result = firstNumber + secondNumber;
            break;
        case "Subtraction":
            result = firstNumber - secondNumber;
            break;
        case "Multiplication":
            result = firstNumber * secondNumber;
            break;
        case "Division":
            if (secondNumber === 0) {
                result = "Cannot divide by zero!";
            } else {
                result = firstNumber / secondNumber;
            }
            break;
        default:
            result = "Please select a valid operator.";
            break;
    }
    document.getElementById("result").innerText = "Result: " + result;
}
