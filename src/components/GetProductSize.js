import React from 'react';
import Chooser from './Chooser';

function GetProductSize(props) {

    const item = props.getItem(props.currentFinal.category);
    const options = item.sizesText;

    const optionSelected = (option) => {
        const index = item.sizesText.indexOf(option);
        const optionAmt = item.sizes[index];
        const updates = {size : optionAmt, sizeText : option};
        props.updateFinal(updates);
    }

    return (
        <div className="green-text text-darken-2">
            <h3>Please Select size of Product:</h3>
            <Chooser options={options} optionSelected={optionSelected} />
        </div>
    );
}

export default GetProductSize;