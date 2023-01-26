const displayElement = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digit');

const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('.clear');

const equalsButton = document.querySelector('.equals');

let displayContent = '',
    num1,
    num2,
    operation;

const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function display(content) {
    if (!content) displayContent = '';
    displayContent += content;
    displayElement.textContent = displayContent;
}

function clear() {
    displayContent = '';
    displayElement.textContent = displayContent;
}

function input(numInput, operationInput) {
    num1 = numInput;
    operation = operationInput;
    display('');
    console.log(num1, operationInput);
}

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener('click', () => {display(digitButton.textContent);});
});

clearButton.addEventListener('click', clear);

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {input(displayContent, operatorButton.dataset.operation);});
});