const Shapes = require('./shapes.js');

class Triangle extends Shapes {

  constructor(shapeColor) {
    super(shapeColor)
      .then(

      /*
        render() {
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(
          new Date()
        )}</p></header>`;
              }
      */
    )
      .catch((error) => console.log(error));
  }

  /*
  
  Code to create Triangle
  <svg width="200" height="200">
  <polygon points="100,10 150,190 50,190" fill="blue" />
  </svg>
   
  */

}

module.exports = Triangle;