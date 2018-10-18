import React from 'react';
import Chooser from './Chooser';

function CheckMultiPack(props) {
    
    const options = ["Individually", "By Case"];
    const product = props.currentFinal.category.charAt(0).toUpperCase() + props.currentFinal.category.slice(1).toLowerCase();

    const optionSelected = (option) => {
        const update = {};
        if (option === options[0])
        {
            update.isSingle = true;
            update.qty = 1;
        }
        else
        {
            update.isSingle = false;
        }
        props.updateFinal(update);
    }

    return (
        <div className="green-text text-darken-2">
            <h3>Is the {product} priced individually or by case? </h3>
            <Chooser options={options} optionSelected={optionSelected} />
        </div>
    );
}

export default CheckMultiPack;