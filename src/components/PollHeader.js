import React from 'react';

class PollHeader extends React.Component {
    render() {
        return(<h1>{this.props.header}</h1>);
    }
}

export default PollHeader;