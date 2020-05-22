import React from 'react';

const userInput = (props) => {
    return <input type ="text" style={props.style} onChange={props.changed} value={props.currentName} />
};

export default userInput;