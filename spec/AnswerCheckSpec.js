import React from 'react';
import TestUtils from 'react-dom/test-utils';
import AnswerCheck from '../src/components/AnswerCheck';
import TestWrapper from '../src/components/TestWrapper';

describe('AnswerCheck', () => {
    let component;
    let expected = 'correct';
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <AnswerCheck checkedValue={expected} correctAnswer={expected}/>
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
