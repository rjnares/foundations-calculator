const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let operand1 = 0;
let operand2 = 0;
let operator;

const ALL_CLEAR = "all-clear";
const POSITIVE_NEGATIVE = "positive-negative";
const DELETE = "delete";

function addNumberToken(numberToken) {
    if (display.textContent.length < 8) {
        const newDisplayContent = display.textContent + numberToken;

        if (operator === undefined) {
            operand1 = parseFloat(newDisplayContent);
        } else {
            operand2 = parseFloat(newDisplayContent);
        }
    
        display.textContent = newDisplayContent;
    }
}

function allClear() {
    operand1 = 0;
    operand2 = 0;
    operator = undefined;
    display.textContent = "0";
}

function togglePositiveNegative() {
    if (operator === undefined) {
        operand1 = -operand1;
        display.textContent = operand1.toString().slice(0, 8);
    } else {
        operand2 = -operand2;
        display.textContent = operand2.toString().slice(0, 8);
    }
}

function handleClick(event) {
    if (event.target.classList.contains("number")) {
        addNumberToken(event.target.textContent);
    } else if (event.target.id === ALL_CLEAR) {
        allClear();
    } else if (event.target.id === POSITIVE_NEGATIVE) {
        togglePositiveNegative();
    } else if (event.target.id === DELETE) {
        display.textContent = display.textContent.slice(0, -1);
    }

    console.log("Operand1: " + operand1);
    console.log("Operand2: " + operand2);
    console.log("Operator: " + operator);
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