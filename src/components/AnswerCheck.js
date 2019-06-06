import React from 'react';

function AnswerCheck(props) {
    let answer = '';

    if(props.checkedValue !== ''){
        answer = (props.checkedValue === props.correctAnswer) ? 'correct':'wrong';
    }

    return(<div>{answer}</div>);   
}

export default AnswerCheck;