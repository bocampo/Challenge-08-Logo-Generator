const inquirer = require('inquirer');
const LogoCharacters = require('/LogoCharacters.js');
const Circle = require('./Circle.js');
const Triangle = require('./Triangle.js');
const Square = require('./Square.js');

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter 3 characters for your new Logo: ',
                name: 'inputLogo',
            },
            {
                type: 'input',
                message: 'What color should the characters be? ',
                name: 'inputLogoColor',
            },
            {
                type: 'list',
                name: 'shapeInput',
                message: 'Which shape should the logo appear inside of? ',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                message: 'What color should the shape be? ',
                name: 'inputShapeColor'
            }
        ])
        .then((response) => writeToFile("GeneratedLogo.svg", createLogo(response)));
}


function createLogo(data) {

    switch (data.shapeInput) {
        case 'Circle':
            const circle = new Circle();
            circle(data.inputShapeColor);
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle(data.inputShapeColor);
            break;
        case 'Square':
            const square = new Square();
            square(data.inputShapeColor);
            break;
    }

    characters = new LogoCharacters();

    characters(data.inputLogo, data.inputLogoColor);
}

init();