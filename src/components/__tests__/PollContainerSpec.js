import React from 'react';
import {shallow} from 'enzyme';
import PollContainer from '../../containers/PollContainer';


describe('PollContainer', () => {
    it('renders witout problems', () => {
        const pollContainer = shallow(<PollContainer />);
        expect(pollContainer).toEqual(jasmine.anything());
    });
});
