import React from 'react';
import TestUtils from 'react-dom/test-utils';
import CurrentChoice from '../src/components/CurrentChoice';
import TestWrapper from '../src/components/TestWrapper';

describe('CurrentChoice', () => {
    let component;
    let expected = 'answer';
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <CurrentChoice checked={expected}/>
            </TestWrapper>
        );
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'div').textContent;
        expect(actual).toEqual('Current Selection: ' + expected);
    });
});
