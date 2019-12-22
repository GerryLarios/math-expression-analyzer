import React, { Component } from "react";

import { range } from "./helpers/helpers";
import { DigitButton, OperatorButton,  HandlerButton } from "./Buttons";


class Calculator extends Component {

    renderDigits = () => range(9, 1).map( digit => <DigitButton key={digit} digit={digit}/> )

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
                <div className="input-wrap">
                    <div className="digits">
                        <DigitButton digit={0}/>
                        <button className="btn digit dot">•</button>
                        {this.renderDigits()}
                    </div>
                    <div className="operations">
                        <OperatorButton operation="÷"/>
                        <OperatorButton operation="×"/>
                        <OperatorButton operation="−"/>
                        <OperatorButton operation="+"/>
                    </div>
                    <div className="handlers">
                        <HandlerButton action="C"/>
                        <HandlerButton action="="/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;