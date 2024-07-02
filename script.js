const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let operand1;
let operand2;
let operator;

function handleClick(event) {
    if (event.target.classList.contains("number")) {
        if (display.textContent.length < 8) {
            display.textContent += event.target.textContent;
        }
    }
}

buttons.addEventListener("click", handleClick);

function operate(operator, operand1, operand2) {
    if (operator === "+") return add(operand1, operand2);
    if (operator === "-") return subtract(operand1, operand2);
    if (operator === "*") return multiply(operand1, operand2);
    if (operator === "/") return divide(operand1, operand2);
}

function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    if (operand2 === 0) return "Really bruh?";
    return operand1 / operand2;
}