export function isMathOperation(str) {
    return /[0-9*+-/]*/.test(str) && !/[*+-/.]{2,}/.test(str);
}

export function isNumber(char) {
    return /[0-9]/.test(char);
}

export function isDot(char) {
    return /[.]/.test(char);
}

export function isOperator(char) {
    return /[/*+-]/.test(char);
}

export function isHighPriority(char) {
    return char === "*" || char === "/" ? true : false;
}