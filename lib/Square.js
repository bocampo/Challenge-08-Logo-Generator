const Shapes = require('./shapes.js');
//const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');


class Square extends Shapes {
    constructor(shapeColor) {
        //this.shapeColor = shapeColor;
        super(shapeColor);
    }
    /*
            if (super.isColor(shapeColor)) {
                //render(shapeColor);
            }
        }
    
        /*
        render(shapeBG) {
            return <svg width="200" height="200"><rect x="10" y="10" width="30" height="30" fill={shapeBG} /></svg>;
        }
        /* Code to create sqaure
        
        */

}

module.exports = Square;