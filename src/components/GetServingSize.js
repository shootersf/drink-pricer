import React from 'react';
import Chooser from './Chooser';

function GetServingSize(props) {

    const item = props.getItem(props.currentFinal.category);
    const options = item.servingsText;

    const optionSelected = (option) => {
        const index = item.servingsText.indexOf(option);
        const optionAmt = item.servings[index];
        const updates = {servingSize : optionAmt, servingSizeText : option};
        props.updateFinal(updates);
    }

    return (
        <div className="green-text text-darken-2">
            <h3>Please Select serving size of Product:</h3>
            <Chooser options={options} optionSelected={optionSelected} />
        </div>
    );
}

export default GetServingSize;