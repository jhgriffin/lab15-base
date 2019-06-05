import React from 'react';

class PollSubmitButton extends React.Component {
    render() {
        return(
            <div>
                <input type="submit" value={this.props.subtmitText}/>
            </div>
        );
    }
}

export default PollSubmitButton;