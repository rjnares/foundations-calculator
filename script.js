const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let operand1;
let operand2;
let operator;

const ALL_CLEAR = "all-clear";
const POSITIVE_NEGATIVE = "positive-negative";
const DELETE = "delete";
const ADD = "add";
const SUBTRACT = "subtract";
const MULTIPLY = "multiply";
const DIVIDE = "divide";
const EQUALS = "equals";

function addNumberToken(numberToken) {
    if (display.textContent.length < 8) {
        if (numberToken === ".") {
            if (display.textContent.includes(".")) return;
            display.textContent += numberToken;
        } else if (display.textContent === "0") {
            display.textContent = numberToken;
        } else {
            display.textContent += numberToken;
        }
    }
}

function allClear() {
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    display.textContent = "0";
}

function togglePositiveNegative() {
    if (display.textContent.startsWith("-")) {
        display.textContent = display.textContent.slice(1);
    } else if (display.textContent.length < 8 && display.textContent !== "0") {
        display.textContent = "-" + display.textContent;
    }
}

function deleteFunction() {
    let newDisplayContent = display.textContent.slice(0, -1);

    if (!parseFloat(newDisplayContent)) {
        newDisplayContent = "0";
    }

    display.textContent = newDisplayContent;
}

function executeOperation(operation) {
    if (operator !== undefined) {
        operand1 = operate();
    }

    operator = operation;
    operand2 = 0;

    display.textContent = operand1.toString().slice(0, 8);
}

function equalsOperation() {
    operand1 = operate();
    operand2 = 0;
    operator = undefined;

    display.textContent = operand1.toString().slice(0, 8);
}

function handleClick(event) {
    if (event.target.classList.contains("number")) {
        addNumberToken(event.target.textContent);
    } else if (event.target.id === ALL_CLEAR) {
        allClear();
    } else if (event.target.id === POSITIVE_NEGATIVE) {
        togglePositiveNegative();
    } else if (event.target.id === DELETE) {
        deleteFunction();
    } else if (event.target.id === ADD) {
        executeOperation(ADD);
    } else if (event.target.id === SUBTRACT) {
        executeOperation(SUBTRACT);
    } else if (event.target.id === MULTIPLY) {
        executeOperation(MULTIPLY);
    } else if (event.target.id === DIVIDE) {
        executeOperation(DIVIDE);
    } else if (event.target.id === EQUALS) {
        equalsOperation();
    }

    console.log("Operand1: " + operand1);
    console.log("Operand2: " + operand2);
    console.log("Operator: " + operator);
}

buttons.addEventListener("click", handleClick);

function operate() {
    if (operator === ADD) return add(operand1, operand2);
    if (operator === SUBTRACT) return subtract(operand1, operand2);
    if (operator === MULTIPLY) return multiply(operand1, operand2);
    if (operator === DIVIDE) return divide(operand1, operand2);
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
    if (operand2 === 0) return "bruh";
    return operand1 / operand2;
}