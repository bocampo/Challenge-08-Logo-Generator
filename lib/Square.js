const Shapes = require('./shapes.js');

class Square extends Shapes {
    constructor(shapeColor) {
        super(shapeColor);
        this.shapeColor = shapeColor;

        this.render(shapeColor)
    }

    render(color) {
        let svgShape = ``;

        if (super.isColor(color)) {
            // SVG content
            svgShape = `<rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}"/>`;
        }
        super.setShapeLogo(svgShape);
        return super.getShapeLogo();
    }
}

module.exports = Square;