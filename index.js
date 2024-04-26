const inquirer = require('inquirer');
const fs = require('fs');
const LogoCharacters = require('./lib/LogoCharacters.js');
const Circle = require('./lib/Circle.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');

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
        .then((response) => fs.writeFile("GeneratedLogo.svg", createLogo(response), function () {
            console.log("Successfuly Written!");
        }));
}


function createLogo(data) {
    let selectedShape = ``;

    switch (data.shapeInput) {
        case 'Circle':
            selectedShape = new Circle(data.inputShapeColor);
            break;
        case 'Triangle':
            selectedShape = new Triangle(data.inputShapeColor);
            break;
        case 'Square':
            selectedShape = new Square(data.inputShapeColor);
            break;
    }

    const characters = new LogoCharacters(data.inputLogo, data.inputLogoColor);

    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

            ${selectedShape.getShapeLogo()} 

            ${characters.getTextLogo()} 

        </svg>`;
}

init();