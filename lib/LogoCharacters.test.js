const LogoCharacters = require('./LogoCharacters.js');

describe('LogoCharcters testing functions', () => {
    describe('Entry Length match', () => {
        it('User entered less than 4 characters', () => {

            const characterEntry = new LogoCharacters('abc', 'red');

            expect(characterEntry.logoEntry.length).toBeLessThan(4);
        });
    })
})