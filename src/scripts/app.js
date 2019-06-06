import React from 'react';
import ReactDOM from 'react-dom';
import PollContainer from '../containers/PollContainer';
import {BrowserRouter} from 'react-router-dom';
import App from '../containers/App';

ReactDOM.render((
    //<PollContainer></PollContainer>, document.getElementById('app')
    <BrowserRouter>
        <App/>
    </BrowserRouter>),
    document.getElementById('app')
);