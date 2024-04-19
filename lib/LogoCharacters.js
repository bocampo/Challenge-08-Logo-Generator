class LogoCharacters {
    constructor(logoEntry, logoColor) {
        this.logoEntry = logoEntry;
        this.logoColor = logoColor;



        if (logoEntry.length > 3) {
            console.log('error thrown');
            throw new Error("Logo must contain no more than 3 characters.");
        }
        /*
        else {
            if (!isColor(logoColor)) {
                throw new Error('Invalid color entry.');
            }
            else {
                render();
            }
        }*/
    }
}

function verifyLength(input) {

}

/*
function isColor(colorInput) {
    const colorKeywordCheck = /^(red|green|blue|yellow|purple|orange|black|white|gray|silver|maroon|lime|olive|navy|teal|fuchsia|aqua)$/i;
    const colorHexCheck = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (colorKeywordCheck.test(colorInput) || colorHexCheck.test(colorInput)) {
        return true;
    }
    else {
        return false;
    }
}

function render() {

    return `<svg width="300" height="200" color="${this.characterColor}">${this.characterEntry}</svg>`;
}*/

/*
const characterEntry = new LogoCharacters('abc', 'blx');

console.log(characterEntry);
*/

module.exports = LogoCharacters;