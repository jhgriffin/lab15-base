import React from 'react';
import {shallow} from 'enzyme';
import RadioButton from '../RadioButton';

describe('PollAnswer', () => {
    let component;
    let expected = 'Pizza';
    beforeEach(()=>{
        component = shallow(<RadioButton label={expected}/>);
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = component.text();
        //TestUtils.findRenderedDOMComponentWithTag(component, 'span').textContent;
        expect(actual).toEqual(expected);
    });
});