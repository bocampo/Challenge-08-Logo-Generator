const Triangle = require('./Triangle.js');

describe('Triangle', () => {
    // Mock the parent Shapes class
    class Shapes {
        constructor(shapeColor) {
            this.shapeColor = shapeColor;
        }
    }

    describe('Valid color text', () => {
        it('should verify if color entered is valid', () => {
            const triangle = new Triangle('red');

            expect(triangle.shapeColor).toBe('red');
        });
    })

    describe('Valid color hexidecimal', () => {
        it('should verify if hexidecimal entered is valid', () => {
            const triangle = new Triangle('#7D2525');

            expect(triangle.shapeColor).toBe('#7D2525');
        });
    })
})