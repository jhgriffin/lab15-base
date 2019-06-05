import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';
import CurrentChoice from '../components/CurrentChoice';
import $ from 'jquery';
import AnswerCheck from '../components/AnswerCheck';

class PollContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            header:'',
            question: '',
            correctAnswer: '',
            currentAnswer: '',
            checkedValue:'',
            choices:[]
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value) {
        this.setState({
            checkedValue: value,
            currentAnswer: value
        });
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount()');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = 
            $.get('http://localhost:8080/data/data.json', 
                function (result) {
                    let data = result;
                    this.setState({
                        header: data.poll.header,
                        question: data.poll.questions[0].question,
                        choices: data.poll.questions[0].choices,
                        correctAnswer: data.poll.questions[0].correctAnswer
                    });
                }.bind(this));
    }
    UNSAFE_componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()');
        //this.checkAnswer(this.state.checkedValue);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
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
                            <RadioButtonGroup
                                name='answer'
                                checkedValue={this.state.checkedValue}
                                choices={this.state.choices} 
                                onChange={this.setCheckedValue}/>
                            <PollSubmitButton subtmitText="Submit" ></PollSubmitButton>
                            <CurrentChoice checked={this.state.currentAnswer}></CurrentChoice>
                            <AnswerCheck 
                                checkedValue={this.state.checkedValue}
                                correctAnswer={this.state.correctAnswer}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;