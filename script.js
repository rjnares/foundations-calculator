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

console.log("Testing add()");
console.log(`Expected: 7, Actual: ${add(3, 4)}`);
console.log(`Expected: 1, Actual: ${add(-3, 4)}`);
console.log(`Expected: -1, Actual: ${add(3, -4)}`);
console.log(`Expected: -7, Actual: ${add(-3, -4)}`);

console.log("Testing subtract()");
console.log(`Expected: -1, Actual: ${subtract(3, 4)}`);
console.log(`Expected: -7, Actual: ${subtract(-3, 4)}`);
console.log(`Expected: 7, Actual: ${subtract(3, -4)}`);
console.log(`Expected: 1, Actual: ${subtract(-3, -4)}`);

console.log("Testing multiply()");
console.log(`Expected: 12, Actual: ${multiply(3, 4)}`);
console.log(`Expected: -12, Actual: ${multiply(-3, 4)}`);
console.log(`Expected: -12, Actual: ${multiply(3, -4)}`);
console.log(`Expected: 12, Actual: ${multiply(-3, -4)}`);

console.log("Testing divide()");
console.log(`Expected: 0.75, Actual: ${divide(3, 4)}`);
console.log(`Expected: -0.75, Actual: ${divide(-3, 4)}`);
console.log(`Expected: -0.75, Actual: ${divide(3, -4)}`);
console.log(`Expected: 0.75, Actual: ${divide(-3, -4)}`);
console.log(`Expected: Really bruh?, Actual: ${divide(3, 0)}`);
console.log(`Expected: Really bruh?, Actual: ${divide(-3, 0)}`);