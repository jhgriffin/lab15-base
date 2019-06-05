import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton';
import TestWrapper from '../src/components/TestWrapper';

describe('PollSubmitButton', () => {
    let component;
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton subtmitText="Answer"/>
            </TestWrapper>
        );
    });

    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
});
