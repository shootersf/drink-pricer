import React from 'react';
import Quaintifier from './Quantifier'

function GetQuantity(props) {

    const quantitySumbitted = (quantity) => {
        const update ={qty : quantity};
        props.updateFinal(update);
    }

    return (
    <div className="green-text text-darken-2">
        <h3>Please enter the No. of bottles per case:</h3>
        <Quaintifier int={true} currency={false} min="1"submit={quantitySumbitted} label="No. of bottles:" />
    </div>
    );
}

export default GetQuantity;