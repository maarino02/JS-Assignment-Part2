/**
 * Operaciones matemáticas para la calculadora
 */

// 1. Suma
function add(a, b) {
    return Number(a) + Number(b);
}

// 2. Resta
function subtract(a, b) {
    return Number(a) - Number(b);
}

// 3. Multiplicación
function multiply(a, b) {
    return Number(a) * Number(b);
}

// 4. División (con control de división por cero)
function divide(a, b) {
    const numB = Number(b);
    if (numB === 0) {
        return "Nice try! Can't divide by 0";
    }
    return Number(a) / numB;
}

/**
 * Función operate que ejecuta la operación indicada entre dos números
 * @param {string} operator - '+', '-', '*', '/', 'add', 'subtract', 'multiply', 'divide'
 * @param {number|string} a 
 * @param {number|string} b 
 * @returns {number|string} Resultado formateado o mensaje de error
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

    // Redondear decimales largos para evitar desbordamiento
    if (typeof result === 'number') {
        return Math.round(result * 1e8) / 1e8;
    }

    return result;
}
