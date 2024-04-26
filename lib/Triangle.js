const Shapes = require('./shapes.js');

class Triangle extends Shapes {
  constructor(shapeColor) {
    super(shapeColor);
    this.shapeColor = shapeColor;

    this.render(shapeColor)
  }

  render(color) {
    let svgShape = ``;

    if (super.isColor(color)) {
      // SVG content
      svgShape = `<polygon points="125,87 162.5,162 87.5,162"  fill="${this.shapeColor}"/>`;
    }
    super.setShapeLogo(svgShape);
    return super.getShapeLogo();
  }
}
module.exports = Triangle;