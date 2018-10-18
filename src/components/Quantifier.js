import React, { Component } from 'react';

class Quantifier extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        if (this.props.int)
        {
            this.state.regex = /^\d+$/; //integer position digits
            this.state.step = "1";
        }
        else
        {
            this.state.regex = /^\d*\.?\d{1,2}$/; //fractions up to 2 places
            this.state.step = "0.01";
        }
        this.state.value = this.props.min;
        this.state.buttonDisable = false;
    }

    validateNum(num) {
        if((isNaN(num)) || num < this.props.min || !this.state.regex.test(num.toString()))
        {
            this.setState({buttonDisable : true});
        }
        else
        {
            this.setState({buttonDisable : false});
        }
    }

    updateValue(e) {
        const newValue = e.target.value;
        this.validateNum(newValue);
        this.setState({value : newValue});
    }

    quantitySubmitted(e) {
        e.preventDefault();
        this.props.submit(this.state.value);
    }


    render() {
        return (
            <form onSubmit={this.quantitySubmitted.bind(this)}>
                <div className="row">
                    <div className="input-field col s6 push-s3">
                        <label className="active">Number of Bottles</label>
                        <input type="number" min={this.props.min} step={this.state.step} value={this.state.value} onChange={this.updateValue.bind(this)} />
                        <button className="btn" disabled={this.state.buttonDisable}>SUBMIT</button>
                    </div>
                </div>
            </form>
        );
        
        
    }
}

export default Quantifier;