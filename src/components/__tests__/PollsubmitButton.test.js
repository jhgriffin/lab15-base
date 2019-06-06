import React from 'react';
import { shallow } from 'enzyme';
import PollSubmitButton from '../PollSubmitButton';

describe('Poll Submit Button', () => {
    it('renders without a problem with custom text', () => {
        let pollsubmitbutton = shallow(<PollSubmitButton subtmitText='Go!'/>);

        let buttonText = pollsubmitbutton.text();
        expect(buttonText).toEqual('Go!');
    });

    it('calls custom handler function on click', () => {
        let handleClick = jest.fn();
        let pollsubmitbutton = shallow(<PollSubmitButton handleClick={handleClick}/>);
        pollsubmitbutton.simulate('click');

        expect(handleClick).toHaveBeenCalled();
        let numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
        expect(numberOfCallsMadeIntoMockFunction).toBe(1);

    });
});