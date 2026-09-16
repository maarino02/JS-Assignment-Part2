
// FUNCTIONS
/**
 * Perform the given action. Unrecognised actions are ignored.
 * @param {string} action 
 */
function doAction(action) {
    switch (action) {
        case 'clear':
            resetCalculator();
            break;
        case 'backspace':
            handleBackspace();
            break;
        case 'decimal':
            inputDecimal();
            break;
        case 'equals':
            handleEquals();
            break;
    }
}

/**
 * Register events to all calculator keys.
 */
function registerButtonEvents() {
    const keys = document.querySelectorAll('.key');

    keys.forEach((key) => {
        key.addEventListener('click', function(event) {
            key.dataset
            if ('action' in key.dataset) {
                doAction(key.dataset.action);
            } else if ('operator' in key.dataset) {
                handleOperator(key.dataset.operator);
            } else {
                inputDigit(key.dataset.number);
            }
    
            updateDisplay(getDisplayValue());
        });
    });
}

// Run when loaded
document.addEventListener('DOMContentLoaded', function() {
    registerButtonEvents();
});