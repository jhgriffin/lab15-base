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
            currentAnswer: '',
            checkedValue:[],
            header:'',
            questions:[]
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value) {
        this.setState({
            checkedValue: value,
            currentAnswer: value
        });
    }

    submitClickHandle(event) {
        event.preventDefault();
        alert('submit');
    }

    componentDidMount(){
        console.log('componentDidMount');
        this._isMounted = true;
        this.serverRequest = 
            $.get('http://localhost:8080/data/data.json', 
                function (result) {
                    let data = result;
                    if(this._isMounted) {
                        this.setState({
                            header: data.poll.header,
                            questions: data.poll.questions
                        });
                    }
                }.bind(this));
    }

    render() {
        let rowStyle={
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        let radioGroups = this.state.questions.map((question) => {
            return(
            <div>
                <PollQuestion question={question.question}></PollQuestion>
                <RadioButtonGroup
                name='answer'
                checkedValue={this.state.checkedValue}
                choices={question.choices} 
                onChange={this.setCheckedValue}/>
                <PollSubmitButton handleClick={this.submitClickHandle.bind(this)} subtmitText="Go!" ></PollSubmitButton>
                <CurrentChoice checked={this.state.currentAnswer}></CurrentChoice>
                <AnswerCheck 
                checkedValue={this.state.checkedValue}
                correctAnswer={question.correctAnswer}/>
            </div>
            )
        });

        return(
            <div className="container">
                <div className="jumbotron">
                    <PollHeader header={this.state.header}></PollHeader>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">                        
                        {radioGroups}
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;