let createdLogo = ``;

class LogoCharacters {
    constructor(logoEntry, logoColor) {
        this.logoEntry = logoEntry;
        this.logoColor = logoColor;


        if (!this.textCounter(logoEntry)) {
            throw new Error('Logo must contain no more than 3 characters.');
        }

        else {
            if (!this.isColor(logoColor)) {
                throw new Error('Invalid color entry.');
            }
            else {
                createdLogo = this.render(logoEntry, logoColor);
            }
        }
    }

    isColor(color) {
        const colorKeywordCheck = /^(red|green|blue|yellow|purple|orange|black|white|gray|silver|maroon|lime|olive|navy|teal|fuchsia|aqua)$/i;
        const colorHexCheck = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;

        if (colorKeywordCheck.test(color) || colorHexCheck.test(color)) {
            return true;
        }
        else {
            return false;
        }
    }

    textCounter(submittedText) {

        if (submittedText.length > 3) {
            return false
        }
        else {
            return true;
        }
    }

    render(logoText, textColor) {
        const svgText = `<text x="50" y="50" font-size="40" fill="${textColor}" text-anchor="middle">${logoText}</text>`;

        return svgText;
    }

    getTextLogo() {
        return createdLogo;
    }
}

module.exports = LogoCharacters;