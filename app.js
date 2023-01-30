const displayElement = document.querySelector('.display');

const digitButtons = document.querySelectorAll('.digit');

const operatorButtons = document.querySelectorAll('.operator');

const percentageButton = document.querySelector('.percentage');

const decimalsButton = document.querySelector('.decimals');

const clearButton = document.querySelector('.clear');

const backspaceButton = document.querySelector('.backspace');

const equalsButton = document.querySelector('.equals');

let displayContent = '',
    storedNum1 = 0,
    storedOperation = '',
    storedResult = 0,
    readyToCalculate = false,
    selectedOperator = '';

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
    if (num1 / num2 === Infinity) return 'Am I joke to you?';
    return num1 / num2;
}

function operate(operation, num1, num2) {
    if (!num1 || !operation) {
        return 'missing parameters'
    } else if (!num2) {
        storedResult = window[`${operation}`](+num1, +num1);
    } else {
        storedResult = window[`${operation}`](+num1, +num2);
    }
    displayElement.textContent = storedResult;
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
    storedNum1 = 0;
    storedOperation = '';
    storedResult = 0;
    readyToCalculate = false;
    displayContent = '';
    if (selectedOperator != null && selectedOperator != '') {
        selectedOperator.classList.remove('selected');
    }
    selectedOperator = '';
    display('');
}

function backspace() {
    displayContent = displayContent.slice(0, displayContent.length - 1);
    displayElement.textContent = displayContent;
}

function percentage() {
    if (displayContent != '') {
        displayContent = displayContent / 100;
        displayElement.textContent = displayContent;
    }
}

function decimals() {
    const regex = /\./g
    const found = displayContent.match(regex)
    if (found == null) {
        displayContent += '.';
        displayElement.textContent = displayContent;
    }
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
    digitButton.addEventListener('click', () => {
        display(digitButton.textContent);
        selectedOperator = document.querySelector('.operator.selected');
        if (selectedOperator != null && selectedOperator != '') {
            selectedOperator.classList.remove('selected');
        }
    });
});

percentageButton.addEventListener('click', percentage);

decimalsButton.addEventListener('click', decimals);

clearButton.addEventListener('click', clear);

backspaceButton.addEventListener('click', backspace);

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        store(displayContent, operatorButton.dataset.operation);
        if (selectedOperator != null && selectedOperator != '') {
            selectedOperator.classList.remove('selected');
        }
        operatorButton.classList.add('selected');
        selectedOperator = document.querySelector('.operator.selected');
    });
});

equalsButton.addEventListener('click', () => {operate(storedOperation, storedNum1, displayContent); readyToCalculate = false;});