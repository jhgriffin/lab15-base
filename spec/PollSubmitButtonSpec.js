import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton';

describe('PollSubmitButton', () => {
    let component;
    beforeEach(()=>{
        component = TestUtils.renderIntoDocument(<PollSubmitButton subtmitText="Answer"/>);
    });

    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
});
