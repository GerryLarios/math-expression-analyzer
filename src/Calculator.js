import React, { Component } from "react";

import { range, isMathOperation } from "./helpers/helpers";
import { DigitButton, OperatorButton,  HandlerButton } from "./Buttons";


class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            main: "",
            preview: ""
        }
    }

    handleOperation({ target }) {
        const main = target.value
        if (isMathOperation(main))
            this.setState({ main });
    }

    handleDigitButton(value) {
        const main = this.state.main + value;
        if (isMathOperation(main))
            this.setState({ main });
    }

    renderDigits = () => range(9, 1).map( digit => {
        return <DigitButton key={digit} digit={digit} onClick={this.handleDigitButton.bind(this)} />
    });

    render() {
        return(
            <div className="calculator">
                <div className="displays">
                    <input 
                        className="display main" 
                        type="text" 
                        value={this.state.main}
                        onChange={this.handleOperation.bind(this)}/>
                    <input 
                        className="display preview" 
                        type="text" 
                        readOnly 
                        value={this.state.preview}/>
                </div>
                <div className="input-wrap">
                    <div className="digits">
                        <DigitButton digit={0} onClick={this.handleDigitButton.bind(this)}/>
                        <button 
                            className="btn digit dot"
                            onClick={() => this.handleDigitButton(".")}>•</button>
                        {this.renderDigits()}
                    </div>
                    <div className="operations">
                        <OperatorButton
                            digit="÷"
                            operation="/" 
                            onClick={this.handleDigitButton.bind(this)}/>
                        <OperatorButton
                            digit="×"
                            operation="*" 
                            onClick={this.handleDigitButton.bind(this)}/>
                        <OperatorButton
                            digit="−"
                            operation="-" 
                            onClick={this.handleDigitButton.bind(this)}/>
                        <OperatorButton
                            digit="+"
                            operation="+" 
                            onClick={this.handleDigitButton.bind(this)}/>
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