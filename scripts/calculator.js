// Intern state of the calculator
const calculatorState = {
    displayValue: '0',
    firstOperand: null,
    currentOperator: null,
    waitingForSecondOperand: false
};

/**
 * Returns the current value to be displayed on the calculator screen
 * @returns {string}
 */
function getDisplayValue() {
    return calculatorState.displayValue;
}

/**
 * Processes the input of a digit ('0'-'9')
 * @param {string} digit 
 * @returns {string} New value for the display
 */
function inputDigit(digit) {
    if (calculatorState.waitingForSecondOperand) {
        calculatorState.displayValue = digit;
        calculatorState.waitingForSecondOperand = false;
    } else {
        calculatorState.displayValue = calculatorState.displayValue === '0' 
            ? digit 
            : calculatorState.displayValue + digit;
    }
    return calculatorState.displayValue;
}

/**
 * Processes the input of the decimal point ('.')
 * @returns {string} New value for the display
 */
function inputDecimal() {
    if (calculatorState.waitingForSecondOperand) {
        calculatorState.displayValue = '0.';
        calculatorState.waitingForSecondOperand = false;
        return calculatorState.displayValue;
    }

    if (!calculatorState.displayValue.includes('.')) {
        calculatorState.displayValue += '.';
    }
    return calculatorState.displayValue;
}

/**
 * Processes the selection of an operator (+, -, *, /)
 * @param {string} nextOperator 
 * @returns {string} Result or current value for the display
 */
function handleOperator(nextOperator) {
    const inputValue = parseFloat(calculatorState.displayValue);

    if (calculatorState.currentOperator && calculatorState.waitingForSecondOperand) {
        calculatorState.currentOperator = nextOperator;
        return calculatorState.displayValue;
    }

    if (calculatorState.firstOperand === null && !isNaN(inputValue)) {
        calculatorState.firstOperand = inputValue;
    } else if (calculatorState.currentOperator) {
        const result = operate(calculatorState.currentOperator, calculatorState.firstOperand, inputValue);
        calculatorState.displayValue = String(result);
        calculatorState.firstOperand = typeof result === 'number' ? result : null;
    }

    calculatorState.waitingForSecondOperand = true;
    calculatorState.currentOperator = nextOperator;
    return calculatorState.displayValue;
}

/**
 * Processes the equals operation, executing the current operation with the first and second operands
 * @returns {string} Result or current value for the display
 */
function handleEquals() {
    if (calculatorState.currentOperator === null || calculatorState.waitingForSecondOperand) {
        return calculatorState.displayValue;
    }

    const inputValue = parseFloat(calculatorState.displayValue);
    const result = operate(calculatorState.currentOperator, calculatorState.firstOperand, inputValue);

    calculatorState.displayValue = String(result);
    calculatorState.firstOperand = null;
    calculatorState.currentOperator = null;
    calculatorState.waitingForSecondOperand = true;
    return calculatorState.displayValue;
}

/**
 * Resets the calculator to its initial state
 * @returns {string} Resets the display to '0'
 */
function resetCalculator() {
    calculatorState.displayValue = '0';
    calculatorState.firstOperand = null;
    calculatorState.currentOperator = null;
    calculatorState.waitingForSecondOperand = false;
    return calculatorState.displayValue;
}

/**
 * Processes the backspace operation, removing the last digit from the display
 * @returns {string} New value for the display
 */
function handleBackspace() {
    if (calculatorState.waitingForSecondOperand) {
        return calculatorState.displayValue;
    }

    if (calculatorState.displayValue.length > 1) {
        calculatorState.displayValue = calculatorState.displayValue.slice(0, -1);
    } else {
        calculatorState.displayValue = '0';
    }
    return calculatorState.displayValue;
}
