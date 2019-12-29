export function range(size = 10, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

export function isMathOperation(str) {
    return /[-+/]?(\d*\.\d+|\d+)*/.test(str);
}