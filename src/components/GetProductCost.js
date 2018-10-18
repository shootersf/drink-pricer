import React from 'react';
import Quaintifier from './Quantifier'


function GetProductCost(props) {

    const prompt = (props.currentFinal.isSingle) ? "Please enter the cost price:" :
                    "Please enter the cost price per case:";

    // if(props.currentFinal.isSingle)
    // {
    //         prompt = "Please enter the cost price:";
    // }
    // else
    // {
    //         prompt = "Please enter the cost price per case:";
    // }
    
    const costSubmitted = (quantity) => {
    const update ={cost : quantity};
    props.updateFinal(update);
    }
    

    return (
        <div className="green-text text-darken-2">
            <h3>{prompt}</h3>
            <Quaintifier int={false} currency={true} min="0.01"submit={costSubmitted} label="Price &euro;"/>
        </div>
        );
}

export default GetProductCost;