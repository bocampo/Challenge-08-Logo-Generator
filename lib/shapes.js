class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;

        this.isColor();
    }


    isColor() {
        const colorKeywordCheck = /^(red|green|blue|yellow|purple|orange|black|white|gray|silver|maroon|lime|olive|navy|teal|fuchsia|aqua)$/i;
        const colorHexCheck = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;

        console.log(this.shapeColor);
        if (colorKeywordCheck.test(this.shapeColor) || colorHexCheck.test(this.shapeColor)) {
            return true;
        }
        else {
            throw new Error('Invalid color entry.');
        }
    }

}


module.exports = Shapes;