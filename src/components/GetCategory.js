import React from 'react';
import Chooser from './Chooser'

function GetCategory(props) {
    const items = props.getItems();
    const options = items.map( item => item.category);

    const optionSelected = (option) => {
        const update = {category : option};

        //check it Item is selected is limited to single or multiple and apply as such
        const item = props.getItem(option);
        if (item.multiPack && !item.singlePack)
        {
            update.isSingle = false;
        }
        else if (!item.multiPack && item.singlePack)
        {
            update.isSingle = true;
            update.qty = 1;
        }

        props.updateFinal(update);
    }

    return (
        <div className="green-text text-darken-2">
            <h3>Please Select the Type of Product:</h3>
            <Chooser options={options} optionSelected={optionSelected} />
        </div>
    );
}

export default GetCategory;