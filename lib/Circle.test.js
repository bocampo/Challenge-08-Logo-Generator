const Circle = require('./Circle.js');

describe('Circle', () => {
    // Mock the parent Shapes class
    class Shapes {
        constructor(shapeColor) {
            this.shapeColor = shapeColor;
        }
    }

    describe('Valid color text', () => {
        it('should verify if color entered is valid', () => {
            const circle = new Circle('red');

            expect(circle.shapeColor).toBe('red');
        });
    })

    describe('Valid color hexidecimal', () => {
        it('should verify if hexidecimal entered is valid', () => {
            const circle = new Circle('#7D2525');

            expect(circle.shapeColor).toBe('#7D2525');
        });
    })
})
