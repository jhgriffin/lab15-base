import React from 'react';
import {shallow} from 'enzyme';
import PollHeader from '../PollHeader';

describe('PollHeader', () => {
    let component;
    let expected = 'Welcome to the Poll!';
    beforeEach(()=>{
        component = shallow(<PollHeader header={expected}/>);
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = component.find('h1').text();
        expect(actual).toEqual(expected);
    });
});
