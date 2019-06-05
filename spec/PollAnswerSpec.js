import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollAnswer from '../src/components/PollAnswer';

describe('PollAnswer', () => {
    let component;
    let expected = 'Pizza';
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(<PollAnswer answer={expected}/>);
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'span').textContent;
        expect(actual).toEqual(expected);
    });
});