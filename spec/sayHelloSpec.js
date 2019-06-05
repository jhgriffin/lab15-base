import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../src/scripts/SayHello';

describe('Greet', () => {
    it('renders witout problems', () => {
        const sayhello = TestUtils.renderIntoDocument(<SayHello />);
        expect(sayhello).toEqual(jasmine.anything());
    });
});