import React from 'react';
import Chooser from './Chooser'

function GetCategory(props) {
    const items = props.getItems();
    const options = items.map( item => item.category);

    const optionSelected = () => {

    }

    return (
        <div className="green-text text-darken-2 center-align">
            <h3>Please Select the Type of Product:</h3>
            <Chooser options={options} optionSelected={optionSelected} />
        </div>
    );
}

export default GetCategory;