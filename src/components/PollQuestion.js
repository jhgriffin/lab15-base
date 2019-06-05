import React from 'react';

class PollQuestion extends React.Component {
    render() {
        return(<div>Your question is: {this.props.question}</div>);
    }
}

export default PollQuestion;