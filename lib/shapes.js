class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;

        this.isColor();
    }


    isColor() {
        const colorKeywordCheck = /^(red|green|blue|yellow|purple|orange|black|white|gray|silver|maroon|lime|olive|navy|teal|fuchsia|aqua)$/i;
        const colorHexCheck = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

        console.log(this.shapeColor);
        if (colorKeywordCheck.test(this.shapeColor) || colorHexCheck.test(this.shapeColor)) {
            console.log('Color is valid');
            return true;
        }
        else {

            throw new Error('Invalid color entry.');
        }
    }

}


module.exports = Shapes;