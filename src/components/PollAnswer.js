import React from 'react';

class PollAnswer extends React.Component {
    render() {
        return(
            <div>
                <input type="radio"/>{this.props.answer}
            </div>
        );
    }
}

export default PollAnswer;