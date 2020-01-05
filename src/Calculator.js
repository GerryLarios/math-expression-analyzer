import React, { Component } from "react";

import { DigitButton, OperatorButton,  HandlerButton } from "./Buttons";
import Record from "./Record";

import { range } from "./helpers/helpers";
import { isMathOperation, isNumber, isEmpty } from "./helpers/validators";
import analyzer from "./helpers/Analyzer";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: "",
            preview: "",
            history: []
        }
    }

    updatePreview() {
        const main = this.state.main;
        if (isEmpty(main))
            this.setState({ preview: "" })
        else if (isNumber(main[0]) && isNumber(main[main.length - 1]))
            this.setState({ preview: analyzer(main) });
    }

    handleEqual(){
        const result = this.state.preview;
        const expression = this.state.main;
        const history = this.state.history;
        this.setState({
            main: "" + result,
            history: history.concat([ { result, expression } ])
        }, this.updatePreview);
    }

    handleDelete() {
        const main = this.state.main.slice(0, -1);
        this.setState({ main }, this.updatePreview);
    }

    handleOperation({ target }) {
        const main = target.value
        if (isMathOperation(main))
            this.setState({ main }, this.updatePreview);
    }

    handleDigitButton(value) {
        const main = this.state.main + value;
        if (isMathOperation(main))
            this.setState({ main }, this.updatePreview);
    }

    handleHistoryRecord(expression, result) {
        this.setState({ main: expression, preview: result });
    }

    renderDigits = () => range(9, 1).map( digit => {
        return <DigitButton key={digit} digit={digit} onClick={this.handleDigitButton.bind(this)} />
    });

    renderHistory = () => this.state.history.map(({expression, result}, index) => {
        return <Record
                    key={index} 
                    expression={expression} 
                    result={result}
                    onClick={() => this.handleHistoryRecord(expression, result)} />
    });

    render() {
        return(
            <div className="wrapper">
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
                            <DigitButton 
                                digit={0} 
                                onClick={this.handleDigitButton.bind(this)}/>
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
                            <HandlerButton
                                action="C" 
                                onClick={this.handleDelete.bind(this)} />
                            <HandlerButton 
                                action="=" 
                                onClick={this.handleEqual.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className="history">
                    <p className="history-header">History</p>
                    {this.renderHistory()}
                </div>
            </div>
        )
    }
}

export default Calculator;