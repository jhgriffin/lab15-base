import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader';
import TestWrapper from '../src/components/TestWrapper';

describe('PollHeader', () => {
    let component;
    let expected = 'Welcome to the Poll!';
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollHeader header={expected}/>
            </TestWrapper>
        );
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h1').textContent;
        expect(actual).toEqual(expected);
    });
});
