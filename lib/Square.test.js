const Square = require('./Square.js');

describe('Square', () => {
    // Mock the parent Shapes class
    class Shapes {
        constructor(shapeColor) {
            this.shapeColor = shapeColor;
        }
    }

    describe('Valid color text', () => {
        it('should verify if color entered is valid', () => {
            const square = new Square('red');

            expect(square.shapeColor).toBe('red');
        });
    })

    describe('Valid color hexidecimal', () => {
        it('should verify if hexidecimal entered is valid', () => {
            const square = new Square('#7D2525');

            expect(square.shapeColor).toBe('#7D2525');
        });
    })

    describe('Invalid color entry', () => {
        it('Error should be thrown for an invalid color input', () => {
            const square = new Square('huh');
            const err = new Error('Invalid color entry.');

            expect(square.shapeColor).toThrow(err);
        });
    })
})

