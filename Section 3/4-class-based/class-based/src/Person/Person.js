import React from 'react';

// Stateless because has no internal state management. Burro. Ter mais desse do que do Stateful
// Makes your app easer to maintain and manager. You have a clean flow of data.

const person = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;