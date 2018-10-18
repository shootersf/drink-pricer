import React from 'react';

function Option({option}) {
    return (
        <div className="col s12">
        <button className="btn">{option}</button>
        </div>
    );
}

export default Option;