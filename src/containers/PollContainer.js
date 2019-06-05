import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';
import CurrentChoice from '../components/CurrentChoice';
import data from '../data/data.json';

class PollContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            header: data.poll.header,
            question: data.poll.questions[0].question,
            correctAnswer: data.poll.questions[0].correctAnswer,
            currentAnswer: '',
            checkedValue:''
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value) {
        this.setState({
            checkedValue: value,
            currentAnswer: value
        });
    }

    render() {
        let rowStyle={
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        const choices = data.poll.questions[0].choices;

        return(
            <div className="container">
                <div className="jumbotron">
                    <PollHeader header={this.state.header}></PollHeader>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">                        
                        <form>
                            <PollQuestion question={this.state.question}></PollQuestion>
                            <RadioButtonGroup
                                name='answer'
                                checkedValue={this.state.checkedValue}
                                choices={choices} 
                                onChange={this.setCheckedValue}/>
                            <PollSubmitButton subtmitText="Submit" ></PollSubmitButton>
                            <CurrentChoice checked={this.state.currentAnswer}></CurrentChoice>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;