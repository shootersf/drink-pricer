import React from 'react';

function Option({option, optionSelected}) {


    return (
        <div className="col s12">
        <button className="btn" onClick={() => {optionSelected(option)}}>{option}</button>
        </div>
    );
}

export default Option;