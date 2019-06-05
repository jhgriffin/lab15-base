import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../src/components/RadioButtonn';

describe('PollAnswer', () => {
    let component;
    let expected = 'Pizza';
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(<RadioButton answer={expected}/>);
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'span').textContent;
        expect(actual).toEqual(expected);
    });
});