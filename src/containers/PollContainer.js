import React from 'react';
import PollAnswer from '../components/PollAnswer';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="col-sm-4 col-sm-offset-4">
                    <PollHeader header="Welcome to the Poll!"></PollHeader>
                    <form>
                        <PollQuestion question="What is your favorite color"></PollQuestion>
                        <PollAnswer answer="Red"></PollAnswer>
                        <PollAnswer answer="Blue"></PollAnswer>
                        <PollAnswer answer="Wait no, I meant yelllooowww!"></PollAnswer>
                        <PollSubmitButton subtmitText="Submit" ></PollSubmitButton>
                    </form>
                </div>
            </div>
        );
    }
}

export default PollContainer;