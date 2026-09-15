function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    const numB = Number(b);
    if (numB === 0) {
        return "Nice try! Can't divide by 0";
    }
    return Number(a) / numB;
}

/**
 * Function to perform the operation based on the operator and operands provided
 * @param {string} operator
 * @param {number|string} a 
 * @param {number|string} b 
 * @returns {number|string}
 */
function operate(operator, a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        return "Error: Número inválido";
    }

    let result;
    switch (operator) {
        case '+':
        case 'add':
            result = add(numA, numB);
            break;
        case '-':
        case 'subtract':
            result = subtract(numA, numB);
            break;
        case '*':
        case 'multiply':
            result = multiply(numA, numB);
            break;
        case '/':
        case 'divide':
            result = divide(numA, numB);
            break;
        default:
            return "Error: Operador inválido";
    }

    // Round the result to 8 decimal places if it's a number
    if (typeof result === 'number') {
        return Math.round(result * 1e8) / 1e8;
    }

    return result;
}
