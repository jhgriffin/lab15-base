var sayHello = require('../src/sayHello.js');

describe('Greet', () => {
    it('concats Hello and a name', () => expect(sayHello.greet('World')).toEqual('Hello, World'));

    it('concats Hello and a number as a string when number passed', () => expect(sayHello.greet(123)).toEqual('Hello, 123'));

    it('returns warning message when no name is given', () => expect(sayHello.greet()).toEqual('warning, no name entered'));

    //it('says good morning + name if it\'s before noon', ())
});
