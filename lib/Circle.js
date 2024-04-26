const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeColor = shapeColor;

        this.render(shapeColor)
    }

    render(color) {
        let svgShape = ``;

        if (super.isColor(color)) {
            // SVG content
            svgShape = `<circle cx="50" cy="75" r="100" fill="${this.shapeColor}"/>`;
        }
        super.setShapeLogo(svgShape);
        return super.getShapeLogo();
    }
}

module.exports = Circle;