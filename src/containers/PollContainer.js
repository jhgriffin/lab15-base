import React from 'react';
import PollAnswer from '../components/PollAnswer';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            header: "Welcome to our question!",
            question: "What's your favorite pizza?",
            answer1: "Hawaiin",
            answer2: "Supreme",
            answer3: "PepMushroom",
            correctAnswer: "Initial State correct Answer"
        }
    }

    render() {
        let rowStyle={
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        return(
            <div className="container">
                <div className="jumbotron">
                    <PollHeader header={this.state.header}></PollHeader>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">                        
                        <form>
                            <PollQuestion question={this.state.question}></PollQuestion>
                            <PollAnswer answer={this.state.answer1}></PollAnswer>
                            <PollAnswer answer={this.state.answer2}></PollAnswer>
                            <PollAnswer answer={this.state.answer3}></PollAnswer>
                            <PollSubmitButton subtmitText="Submit" ></PollSubmitButton>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;