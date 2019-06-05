import React from 'react';

class PollSubmitButton extends React.Component {
    render() {
        return(
            <div>
                <input className="btn btn-success" type="submit" value={this.props.subtmitText}/>
            </div>
        );
    }
}

export default PollSubmitButton;