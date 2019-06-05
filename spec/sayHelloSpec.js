import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../src/scripts/SayHello';
import PollAnswer from '../src/components/PollAnswer';
import PollContainer from '../src/containers/PollContainer';
import PollHeader from '../src/components/PollHeader';
import PollQuestion from '../src/components/PollQuestion';
import PollSubmitButton from '../src/components/PollSubmitButton';

describe('Greet', () => {
    it('renders witout problems', () => {
        const sayhello = TestUtils.renderIntoDocument(<SayHello />);
        expect(sayhello).toEqual(jasmine.anything());
    });
});

describe('PollContainer', () => {
    it('renders witout problems', () => {
        const pollContainer = TestUtils.renderIntoDocument(<PollContainer />);
        expect(pollContainer).toEqual(jasmine.anything());
    });
});


describe('PollHeader', () => {
    it('renders witout problems', () => {
        const pollHeader = TestUtils.renderIntoDocument(<PollHeader />);
        expect(pollHeader).toEqual(jasmine.anything());
    });
});

describe('PollQuestion', () => {
    it('renders witout problems', () => {
        const pollQuestion = TestUtils.renderIntoDocument(<PollQuestion />);
        expect(pollQuestion).toEqual(jasmine.anything());
    });
});

describe('PollAnswer', () => {
    it('renders witout problems', () => {
        const pollAnswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect(pollAnswer).toEqual(jasmine.anything());
    });
});

describe('PollSubmitButton', () => {
    it('renders witout problems', () => {
        const pollSubmitButton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect(pollSubmitButton).toEqual(jasmine.anything());
    });
});
