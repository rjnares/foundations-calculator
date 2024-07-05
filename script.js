const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let operand1 = 0;
let operand2 = 0;
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
        const operand = operator === undefined ? operand1 : operand2;
        let newDisplayContent;

        if (operand === 0 && numberToken !== ".") {
            newDisplayContent = numberToken;
        } else {
            newDisplayContent = display.textContent + numberToken;
        }

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

function deleteFunction() {
    let newDisplayContent;

    if (operator === undefined) {
        if (display.textContent.length === 8 && operand1 < 0) {
            operand1 = -operand1;
            newDisplayContent = operand1.toString();
        } else {
            newDisplayContent = display.textContent.slice(0, -1);
            
            if (newDisplayContent === "" || newDisplayContent === "-") {
                newDisplayContent = "0";
            }
            
            operand1 = parseFloat(newDisplayContent);
        }
    } else if (display.textContent.length === 8 && operand2 < 0) {
        operand2 = -operand2;
        newDisplayContent = operand2.toString();
    } else {
        newDisplayContent = display.textContent.slice(0, -1);

        if (newDisplayContent === "" || newDisplayContent === "-") {
            newDisplayContent = "0";
        }

        operand2 = parseFloat(newDisplayContent);
    }

    display.textContent = newDisplayContent;
}

function addOperation() {
    if (operator !== undefined) {
        operand1 = operate();
    }

    operator = ADD;
    operand2 = 0;

    display.textContent = operand1.toString().slice(0, 8);
}

function equalsOperation() {
    result = operate();
    operand1 = 0;
    operand2 = 0;
    operator = undefined;

    display.textContent = result.toString().slice(0, 8);
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
        addOperation();
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
    if (operand2 === 0) return "Really bruh?";
    return operand1 / operand2;
}