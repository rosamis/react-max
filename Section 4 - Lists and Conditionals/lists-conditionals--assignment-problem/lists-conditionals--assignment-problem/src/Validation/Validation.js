import React from 'react';

const validation = (props) => {
    let text = 'Text long enough';

    if (props.inputLength <= 5){
        text = 'Text too short';
    }

    return (
        <div>
            <p>{text}</p>
        </div>
    )
};

// const validation = (props) => {
//     return (
//         <div>
//             {
//                 props.inputLength > 5 ?
//                 <p>Text long enough!</p> :
//                 <p>Text too short</p>
//             }
//         </div>
//     )
// };

export default validation;