import React from 'react';
import {shallow} from 'enzyme';
import PollContainer from '../../containers/PollContainer';
import $ from 'jquery';
import { callbackify } from 'util';

describe('PollContainer', () => {
    let wrapper;
    beforeEach(()=>{
        $.get = jest.fn((url, callback) => {
        let response = {
            poll:
                {
                    header: "Welcome to the Poll!",
                    questions : [{
                        question: "What is  best?",
                        choices: [
                            {value: "Tacos", label: "Tacos"},
                            {value: "Pizza", label: "Pizza"},
                            {value: "Cheese", label: "Cheese"}
                        ],
                        correctAnswer: "Pizza"
                    },
                    {
                        question: "What's your favorite color?:",
                        choices: [
                            {value: "Orange", label: "Orange"},
                            {value: "Blue", label: "Blue"}
                        ],
                        correctAnswer: "Blue"
                        }
                    ]
                }
            }
            callback(response);
        });
        wrapper = shallow(<PollContainer />);
    });

    it('renders witout problems', () => {
        expect(wrapper).toEqual(jasmine.anything());
       
    });

    it('renders multiple questions if present', () => {
        let numberOfQuestions = wrapper.find('PollQuestion');
        expect(numberOfQuestions.length).toEqual(2);
        
    });
});
