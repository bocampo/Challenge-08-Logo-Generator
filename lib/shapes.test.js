const Shapes = require('./shapes.js');

describe('Shapes', () => {

  describe('Valid color', () => {
    const shape = new Shapes('AEA8A8');
    //const err = new Error('Invalid color entry.');

    expect(shape.isColor()).toEqual(true);
  })

});

