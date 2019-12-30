export function range(size = 10, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export function isMathOperation(str) {
    return /[0-9*+-/]*/.test(str) && !/[*+-/.]{2,}/.test(str);
}

export function isNumber(char) {
    return /[0-9]/.test(char);
}

function isDot(char) {
    return /[.]/.test(char);
}

export function takeNumber(str) {
    let numbers = []
    let current = "";
    const length = str.length;

    for (let i = 0; i < length; i++) {
        const char = str[i];
        if (isNumber(char) || isDot(char)) {
            current += char;
        } else {
            numbers.push(Number(current));
            current = "";
        }
    }

    if (isNumber(str[str.length - 1]))
        numbers.push(Number(current));

    return numbers;
}