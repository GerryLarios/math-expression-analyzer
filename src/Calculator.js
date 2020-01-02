import React, { Component } from "react";

import { range } from "./helpers/helpers";
import { isMathOperation, isNumber } from "./helpers/validators";
import { DigitButton, OperatorButton,  HandlerButton } from "./Buttons";
import analyzer from "./helpers/Analyzer";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: "",
            preview: ""
        }
    }

    handleEqual(){
        const main = this.state.main;
        if (isNumber(main[0]) && isNumber(main[main.length - 1])) {
            console.log(analyzer(main));
        }
    }

    handleDelete() {
        this.setState({
            main: this.state.main.slice(0, -1)
        });
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
                        <HandlerButton 
                            action="=" 
                            onClick={this.handleEqual.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;