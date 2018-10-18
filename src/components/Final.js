import React, {Component} from 'react';

class Final extends Component {

    constructor(props) {
        super(props);

        const final = props.final;
        const cost = ((final.cost / final.qty) / (final.size / final.servingSize)).toFixed(2);

        this.state = {
            cost : cost,
            salePrice : cost,
            markup : 0,
            pouringCost : null,
            profit : 0,
            focusedInput : null
        };
    }

    inputFocusHandler(e) {
        const input = e.target;
        input.select();
        this.setState({focusedInput : input});
    }

    updateSalePrice(e) {
        const reg = /^\d*\.?\d{1,2}$/
        const salePrice = Number(e.target.value);
        
        this.setState({ salePrice })
        //if number is valid update all markup and profit
        if (!isNaN(salePrice) && salePrice > 0 && reg.test(salePrice))
        {
            const profit = (salePrice - this.state.cost).toFixed(2);
            const markup = (profit * 100 / this.state.cost).toFixed(2);
            this.setState({profit, markup});
        }
    }

    render() {
        console.log(this.state);
        const euroIcon = "fas fa-euro-sign prefix";
        const percentIcon = "fas fa-percentage prefix";
        const header = "Final Costing per " + this.props.final.servingSizeText + ":";
        return (
        <div className="final green-text text-darken-2">
            <h3>{header}</h3>
            <div className="row">
                <div className="input-field col s4">
                    <i className={euroIcon}></i>
                    <label className="active">Cost Price:</label>
                    <input type="number" value={this.state.cost} disabled={true}/>
                </div>
                <div className="input-field col s4">
                        <i className={euroIcon}></i>
                        <label className="active">Sale Price:</label>
                        <input type="number" id="salePrice" onFocus={this.inputFocusHandler.bind(this)}  min="0" step="0.01" value={this.state.salePrice} onChange={this.updateSalePrice.bind(this)} />
                </div>
                <div className="input-field col s4">
                    <i className={percentIcon}></i>
                    <label className="active">Markup: </label>
                    <input type="number" value={this.state.markup} disabled={true}/>
                </div>
            </div>
            <div className="row">
            <div className="input-field col s4">
                    <i className={euroIcon}></i>
                    <label className="active">Profit: </label>
                    <input type="number" value={this.state.profit} disabled={true}/>
                </div>
            </div>
        </div>
        );
    }
}

export default Final;