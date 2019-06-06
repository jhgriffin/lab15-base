import React from 'react';
import AnswerCheck from '../AnswerCheck';
import {shallow} from 'enzyme';

describe('AnswerCheck', () => {
    let component;
    let expected = 'correct';
    
    beforeEach(()=>{
        component = shallow(<AnswerCheck checkedValue={expected} correctAnswer={expected}/>);
    });


    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = component.text();
        expect(actual).toEqual(expected);
    });
});
