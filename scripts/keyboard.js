
// Value lookups
const KEYS = {
    'Digit1': 1,
    'Digit2': 2,
    'Digit3': 3,
    'Digit4': 4,
    'Digit5': 5,
    'Digit6': 6,
    'Digit7': 7,
    'Digit8': 8,
    'Digit9': 9,
    'Digit0': 0,
    'Numpad1': 1,
    'Numpad2': 2,
    'Numpad3': 3,
    'Numpad4': 4,
    'Numpad5': 5,
    'Numpad6': 6,
    'Numpad7': 7,
    'Numpad8': 8,
    'Numpad9': 9,
    'Numpad0': 0,
    'NumpadDecimal': '.',
    'Period': '.',
    'Slash': '/',
    'Minus': '-',
    'NumpadAdd': '+',
    'NumpadSubtract': '-',
    'NumpadMultiply': '*',
    'NumpadDivide': '/',
    'Enter': '=',
    'NumpadEnter': '=',
    'Equal': '=',
    'Backspace': 'del',
    'Delete': 'del',
    'Escape': 'reset',
};
const SHIFT_KEYS = {
    'Equal': '+',
    'Digit8': '*',
};

// FUNCTIONS
/**
 * Translates the pressed key to an appropriate value.
 * Unrecognised values are simply `null`.
 * @param {string} key 
 * @param {bool} isShift 
 * @returns {any}
 */
function translateKey(key, isShift) {
    const reference = isShift ? SHIFT_KEYS : KEYS;
    const value = reference[key] ?? null;
    return value;
}

/**
 * Handle the value from the key event appropriately.
 * @param {any} value 
 */
function handleValue(value) {
    if (value === null) return;  // Ignored

    switch (value) {
        case '+':
        case '-':
        case '/':
        case '*':
            handleOperator(value);
            break;
        case '.':
            inputDecimal();
            break;
        case '=':
            handleEquals();
            break;
        case 'del':
            handleBackspace();
            break;
        case 'reset':
            resetCalculator();
            break;
        default:
            inputDigit(value);
    }
}

/**
 * Set up the keypress events.
 */
function registerKeyEvents() {
    document.addEventListener('keydown', function(event) {
        const value = translateKey(event.code, event.shiftKey);
        handleValue(value);
        updateDisplay(calculatorState.displayValue);
    });
}

// Run when loaded
document.addEventListener('DOMContentLoaded', function() {
    registerKeyEvents();
});