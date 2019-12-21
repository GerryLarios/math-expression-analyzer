import React, { Component } from "react";

import { DigitButton } from "./Buttons";

class Calculator extends Component {

    render() {
        return(
            <div className="calculator">
                <div className="displays">
                    {/*
                        Display:
                            * Current value.
                            * Pre-Result
                    */}
                </div>
                <div className="digits">
                    {/*
                        Buttons:
                            * Numbers
                            * Point
                    */}
                </div>
                <div className="operations">
                    {/*
                        Buttons:
                            * Division
                            * Multiply
                            * Minus
                            * Plus
                    */}
                </div>
                <div className="handlers">
                    {/*
                        Buttons:
                            * Delete
                            * Equal
                    */}
                </div>
            </div>
        )
    }
}

export default Calculator;