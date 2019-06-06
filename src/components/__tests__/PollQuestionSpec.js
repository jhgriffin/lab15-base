import React from 'react';
import {shallow} from 'enzyme';
import PollQuestion from '../PollQuestion';

describe('PollQuestion', () => {
    let component;
    let expected = 'What is best?';
    beforeEach(()=>{
        component = shallow(<PollQuestion question={expected}/>);
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = component.text();
        expect(actual).toEqual(expected);
    });
});