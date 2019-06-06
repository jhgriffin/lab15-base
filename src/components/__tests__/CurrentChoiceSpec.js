import React from 'react';
import {shallow} from 'enzyme';
import CurrentChoice from '../CurrentChoice';

describe('CurrentChoice', () => {
    let component;
    let expected = 'answer';
    beforeEach(()=>{
        component = shallow(<CurrentChoice checked={expected}/>);
    });
    it('renders witout problems', () => {
        expect(component).toEqual(jasmine.anything());
    });
    it('prints a message', () => {
        let actual = component.text();
        expect(actual).toEqual('Current Selection: ' + expected);
    });
});
