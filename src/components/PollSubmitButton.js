import React from 'react';

function PollSubmitButton(props) {
    return(<input className="btn btn-success" type="submit" value={props.subtmitText}/>);
}
export default PollSubmitButton;