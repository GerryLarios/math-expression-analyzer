import React from "react";


export function DigitButton({ digit, onClick }) {
    return(
        <button className="btn digit" onClick={() => onClick(digit)}>
            {digit}
        </button>
    )
}

export function OperatorButton({ operation, digit, onClick }) {
    return(
        <button className="btn operator" onClick={() => onClick(operation)}>
            {digit}
        </button>
    )
}

export function HandlerButton({ action, onClick }) {
    return (
        <button className="btn handler" onClick={onClick}>
            {action}
        </button>
    )
}