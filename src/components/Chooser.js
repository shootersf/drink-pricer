import React from 'react';
import Option from'./Option';

function Chooser({options, optionSelected}) {
    const display = options.map( option => <Option key={option} option={option} />)
    return (
        <div className="container">
            {display}
        </div>
    );
}

export default Chooser;