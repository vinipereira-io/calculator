const displayElement = document.querySelector('.display');

const digitButtons = document.querySelectorAll('button.digit');

const clearButton = document.querySelector(`[data-function='clear']`);

let displayContent = '';

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

function display(e) {
    displayContent += e.target.textContent;
    displayElement.textContent = displayContent;
}

function clear() {
    displayContent = '';
    displayElement.textContent = displayContent;
}

digitButtons.forEach((digitButton) => {
    digitButton.addEventListener('click', display);
});

clearButton.addEventListener('click', clear);