
// FUNCTIONS
/**
 * Perform the given action. Unrecognised actions are ignored.
 * @param {string} action 
 */
function doAction(action) {
    if (action === 'clear') {
        resetCalculator();
    } else if (action === 'backspace') {
        handleBackspace();
    }
}

/**
 * Register events to all calculator keys.
 */
function registerButtonEvents() {
    const keys = document.querySelectorAll('.key');

    keys.forEach((key) => {
        key.addEventListener('click', function(event) {
            if (key.classList.contains('key--action')) {
                doAction(key.dataset.action);
            } else if (key.classList.contains('key--operator')) {
                handleOperator(key.dataset.operator);
            } else if (key.classList.contains('key--equals')) {
                handleEquals();
            } else {
                inputDigit(key.dataset.number);
            }
    
            updateDisplay(calculatorState.displayValue);
        });
    });
}

// Run when loaded
document.addEventListener('DOMContentLoaded', function() {
    registerButtonEvents();
});