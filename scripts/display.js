// Elements
const DISPLAY = {
    screen: null,
};
// Configuration
const LIMITS = {
    upper: 1e12,
    lower: 1e-9,
    maxFixedDigits: 8,
    maxExponentialDigits: 4,
};

// FUNCTIONS
/**
 * Format a number so that the display can show it appropriately.
 * @param {any} value 
 * @returns {string}
 */
function formatNumber(value) {
    if (!Number.isFinite(value)) {
        return 'ERROR';
    }

    const abVal = Math.abs(value);

    if (abVal >= LIMITS.upper || (abVal > 0 && abVal < LIMITS.lower)) {
        return value.toExponential(LIMITS.maxExponentialDigits);
    }

    return value.toFixed(LIMITS.maxFixedDigits).replace(/\.?0+$/, '');
}

/**
 * Tests if a string value is a valid number string.
 * Allows +/- numbers, 
 * @param {string} stringValue 
 * @returns {bool}
 */
function isValidNumber(stringValue) {
    return /^[+-]?(?:\d+|\d+\.\d+)$/.test(stringValue);
}

/**
 * Update the output display to show the current display value given.
 * @param {any} value 
 */
function updateDisplay(value) {
    if (DISPLAY.screen) {
        let displayValue = value;

        if (typeof displayValue === 'string' && isValidNumber(displayValue)) {
            displayValue = Number(displayValue);
        }
        if (typeof displayValue === 'number') {
            displayValue = formatNumber(displayValue);
        }

        DISPLAY.screen.textContent = displayValue;
    }
}

// Run when loaded
document.addEventListener('DOMContentLoaded', function() {
    DISPLAY.screen = document.querySelector('output.calculator__display');
});