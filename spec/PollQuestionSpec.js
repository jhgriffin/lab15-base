import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion';
import TestWrapper from '../src/components/TestWrapper';

describe('PollQuestion', () => {
    let component;
    let expected = 'What is best?';
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollQuestion question={expected}/>
            </TestWrapper>
        );
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'div').textContent;
        expect(actual).toEqual(expected);
    });
});