// Elements
const DISPLAY = {
    screen: null,
};
const LIMITS = {
    upper: 1e12,
    lower: 1e-9,
    maxFixedDigits: 9,
    maxExponentialDigits: 7,
};

// FUNCTIONS
// Handle number formatting to prevent long numbers 
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

// Update the display with the value given.
function updateDisplay(value) {
    if (DISPLAY.screen) {
        let displayValue = value;

        if (typeof value === 'number') {
            displayValue = formatNumber(value);
        }

        DISPLAY.screen.textContent = displayValue;
    }
}

// Run when loaded
document.addEventListener('DOMContentLoaded', function() {
    DISPLAY.screen = document.querySelector('output.calculator__display');
});