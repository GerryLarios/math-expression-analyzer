import React from "react";

export default function Record({ expression, result, onClick }) {
    return (
        <div className="record" onClick={onClick}>
            <p className="expression">{expression}</p>
            <p className="result">{result}</p>
        </div>
    )
}