import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollContainer from '../src/containers/PollContainer';


describe('PollContainer', () => {
    it('renders witout problems', () => {
        const pollContainer = TestUtils.renderIntoDocument(<PollContainer />);
        expect(pollContainer).toEqual(jasmine.anything());
    });
});
