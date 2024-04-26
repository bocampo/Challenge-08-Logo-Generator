let svgShapeDisplay = ``;

class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
        this.isColor(shapeColor);
    }

    isColor(color) {
        const colorKeywordCheck = /^(red|green|blue|yellow|purple|orange|black|white|gray|silver|maroon|lime|olive|navy|teal|fuchsia|aqua)$/i;
        const colorHexCheck = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;

        if (colorKeywordCheck.test(color) || colorHexCheck.test(color)) {
            return true;
        }
        else {
            throw new Error('Invalid color entry.');
        }
    }

    setShapeLogo(submittedShape) {
        svgShapeDisplay = submittedShape;
    }

    getShapeLogo() {
        return svgShapeDisplay;
    }
}


module.exports = Shapes;