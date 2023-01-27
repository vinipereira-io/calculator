const displayElement = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digit');

const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('.clear');

const equalsButton = document.querySelector('.equals');

let displayContent = '',
    storedNum1 = 0,
    storedOperation = '',
    storedResult = 0,
    readyToCalculate = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    storedResult = window[`${operation}`](+num1, +num2);
    displayElement.textContent = storedResult;
//    displayContent = '';
    storedNum1 = storedResult;
    return storedResult;
}

function display(content) {
    storedResult = '';
    if (!content) displayContent = '';
    displayContent += content;
    displayElement.textContent = displayContent;
}

function clear() {
    displayContent = '';
    display('');
}

function store(numInput, operationInput) {
    if (readyToCalculate === true) {
        operate(storedOperation, storedNum1, displayContent);
        displayContent = '';
    } else if (storedResult != '') {
        storedOperation = operationInput;
        readyToCalculate = true;
        display('');
    } else {
        storedNum1 = numInput;
        storedOperation = operationInput;
        readyToCalculate = true;
        display('');
    }
}

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener('click', () => {display(digitButton.textContent);});
});

clearButton.addEventListener('click', clear);

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {store(displayContent, operatorButton.dataset.operation);});
});

equalsButton.addEventListener('click', () => {operate(storedOperation, storedNum1, displayContent); readyToCalculate = false;});