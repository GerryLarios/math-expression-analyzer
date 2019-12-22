import React from "react";


export function DigitButton({ digit }) {
    return(
        <button className="btn digit">{digit}</button>
    )
}

export function OperatorButton({ operation }) {
    return(
        <button className="btn operator">{operation}</button>
    )
}

export function HandlerButton({ action }) {
    return (
        <button className="btn handler">{action}</button>
    )
}