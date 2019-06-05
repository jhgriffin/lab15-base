import React from 'react';

class PollAnswer extends React.Component {
    render() {
        return(
            <div className="radio">
                <input type="radio"/><span>{this.props.answer}</span>
            </div>
        );
    }
}

export default PollAnswer;