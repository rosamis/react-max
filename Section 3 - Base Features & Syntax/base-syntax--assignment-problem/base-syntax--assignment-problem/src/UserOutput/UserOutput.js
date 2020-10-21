import React from 'react';
import './UserOutput.css';


const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Maybe will overwritten..</p>
            <p>Username: {props.userName}</p>
        </div>
    );
};

export default userOutput;