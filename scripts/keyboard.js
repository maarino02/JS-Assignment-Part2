
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
};
const SHIFT_KEYS = {
    'Equal': '+',
    'Digit8': '*',
};

// FUNCTIONS
// Translates the pressed key to a set value
function translateKey(key, isShift) {
    const reference = isShift ? SHIFT_KEYS : KEYS;
    const value = reference[key] ?? null;
    return value;
}

// Handle the way the determined value is used
function handleValue(value) {
    if (value === null) return;  // Ignored

    console.log(value);  // TODO - When operations are implemented
}

// Set up events for key presses
function registerKeyEvents() {
    document.addEventListener('keydown', function(event) {
        console.log(event.code);
        const value = translateKey(event.code, event.shiftKey);
        handleValue(value);
    });
}

// Run when loaded
document.addEventListener('DOMContentLoaded', function() {
    registerKeyEvents();
});