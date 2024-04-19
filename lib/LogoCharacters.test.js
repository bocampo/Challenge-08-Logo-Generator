const LogoCharacters = require('./LogoCharacters.js');

describe('LogoCharcters testing functions', () => {
    describe('Entry Length match', () => {
        it('User entered less than 4 characters', () => {

            let characterEntry = new LogoCharacters('abc', 'red');

            expect(characterEntry.logoEntry.length).toBeLessThan(4);
        });
    })

    describe('Entry length too long', () => {
        it('User entered more than 3 characters', () => {
            let characterEntry = new LogoCharacters('abcd', 'red');
            const err = new Error("Logo must contain no more than 3 characters.");

            expect(characterEntry).toThrow(err);
        });
    })

    /*
    describe('Invalid Color', () => {
        it('User entered an invalid entry for a color', () => {
            const error = new Error('Invalid color entry.');
            const characterEntry = new LogoCharacters('abc', 'blx');
    
            console.log(characterEntry.isColor('po'));
    
            expect(characterEntry.isColor('po')).toThrow(error);
        });
    });
    
    */

})