import React from 'react';

class PollHeader extends React.Component {
    render() {
        return(<h1 className="text-center">{this.props.header}</h1>);
    }
}

export default PollHeader;