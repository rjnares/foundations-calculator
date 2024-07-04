const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let operand1;
let operand2;
let operator;

const ALL_CLEAR = "all-clear";
const POSITIVE_NEGATIVE = "positive-negative";
const DELETE = "delete";

function updateOperands(newDisplayContent) {
    const newOperandValue = newDisplayContent.includes(".") ?
                                parseFloat(newDisplayContent) :
                                parseInt(newDisplayContent);

    if (operator === undefined) {
        operand1 = newOperandValue;
    } else {
        operand2 = newOperandValue;
    }
}

function addNumber(number) {
    if (display.textContent.length < 8) {
        const newDisplayContent = display.textContent + number;
        updateOperands(newDisplayContent);
        display.textContent = newDisplayContent;
    }
}

function togglePositiveNegative() {
    let newDisplayContent;

    if (display.textContent.startsWith("-")) {
        newDisplayContent = display.textContent.slice(1);
    } else {
        newDisplayContent = "-" + display.textContent;
    }

    updateOperands(newDisplayContent);
    display.textContent = newDisplayContent;
}

function handleClick(event) {
    if (event.target.classList.contains("number")) {
        addNumber(event.target.textContent);
    } else if (event.target.id === ALL_CLEAR) {
        display.textContent = "";
    } else if (event.target.id === POSITIVE_NEGATIVE) {
        togglePositiveNegative();
    } else if (event.target.id === DELETE) {
        display.textContent = display.textContent.slice(0, -1);
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