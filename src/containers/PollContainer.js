import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            header: 'Welcome to our question!',
            question: 'What\'s your favorite pizza?',
            correctAnswer: 'Initial State correct Answer',
            checkedValue:''
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value) {
        this.setState({
            checkedValue: value
        });
        console.log("current choice: " + value);
    }

    render() {
        let rowStyle={
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        const choices = [
            {value: 'Tacos', label: 'Tacos'},
            {value: 'Pizza', label: 'Pizza'},
            {value: 'Cheese', label: 'Cheese'}
        ];

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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;