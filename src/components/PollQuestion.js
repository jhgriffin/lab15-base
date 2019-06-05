import React from 'react';

class PollQuestion extends React.Component {
    render() {
        return(<div>{this.props.question}</div>);
    }
}

export default PollQuestion;