const { addNumbers } = require('../modules/equations.js');

describe('addNumbers function', () => {

    it('should add two positive numbers together', () => {

        // create your sample inputs
        const [mockNum1, mockNum2, mockNum3, mockNum4, mockNum5, mockNum6] 
        = [3, 5, 9, 20, 12, 21]

        // assertion to determine pass / fail
        expect.assertions(3);
        expect(addNumbers(mockNum1, mockNum2)).toBe(8);
        expect(addNumbers(mockNum3, mockNum4)).toBe(29);
        expect(addNumbers(mockNum5, mockNum6)).toBe(33);

    });

    it('should sum positive and negative numbers', () => {

        expect(addNumbers(1, -2)).toBe(-1);

    });

    it('should sum positive and negative decimal numbers', () => {

        expect(addNumbers(-1.5, 3)).toBe(1.5);

    });

    // it.only will run only this test and skip the rest
    it('should sum correctly with only one value passed in', () => {

        expect(addNumbers(3)).toBe(3);

    });

    it('should sum two strings with a NaN error', () => {
        
        expect(addNumbers('foo', 'bar')).toBe(NaN);

    });

});