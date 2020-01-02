import { isOperator, isHighPriority, isNumber } from "./validators";

function stringToElements(mathExpression) {
    let elements = [];
    let number = "";
    for (let i = 0; i < mathExpression.length; i++) {
        const char = mathExpression[i];
        if (isOperator(char)) {
            elements.push(Number(number), char);
            number = "";
        } else number += char;
    }
    elements.push(Number(number));
    return elements;
}

function operations(operator, left, right) {
    switch (operator) {
        case "*":
            return left * right;
        case "/":
            return left / right;
        case "+":
            return left + right;
        case "-":
            return left - right;
        default:
            return null;
    }
}

function takeExpression(queue) {
    return [ queue.shift(), queue.shift() ];
}

function orderExpressionQueue(queue) {
    let aux = [];
    while (queue.length) {
        const [number, operator] = takeExpression(queue);
        if (isHighPriority(operator))
            queue.unshift(operations(operator, number, queue.shift()))
        else
            operator ? aux.push(number, operator) : aux.push(number);
    }
    return aux;
}

function calculateExpressionQueue(queue) {
    while (queue.length !== 1) {
        const [number, operator] = takeExpression(queue);
        queue.unshift(operations(operator, number, queue.shift()));
    }
    return queue[0];
}

export default function analyzer(mathExpression) {
    let queue = stringToElements(mathExpression);
    const orderedQueue = orderExpressionQueue(queue);
    return calculateExpressionQueue(orderedQueue);
}