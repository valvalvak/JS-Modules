const testLibrary = require('./library');
const { expect } = require('chai');

describe('Test library', () => {

    describe('calcPriceOfBook', () => {
        it('works with valid year <= 1980', () => {
            expect(testLibrary.calcPriceOfBook("IT", 1980)).to.contain(`10.00`);
        })
        it('works with valid year > 1980', () => {
            expect(testLibrary.calcPriceOfBook("IT", 2000)).to.contain(`20.00`);
        })
        it('trows a msg of bad input of first param (number but string)', () => {
            expect(() => testLibrary.calcPriceOfBook(1900, 1900)).to.throw();
        })
        it('trows a msg of bad input of second param (string but number)', () => {
            expect(() => testLibrary.calcPriceOfBook(1900, "year")).to.throw();
        })

    })
    describe('findBook', () => {
        const books = ["IT", "DreamCatcher", "JungleBook"]
        const bookName = "IT";
        it('works with the desired book in library (lets say "a happy case")', () => {
            expect(testLibrary.findBook(books, bookName)).to.contain("found");
        })
        it('works with the desired book NOT in library ("not so happy case, but works")', () => {
            expect(testLibrary.findBook(books, 'abraCadabra')).to.contain('not here');
        })
        it('trows a msg for zero array', () => {
            expect(() => testLibrary.findBook([], bookName)).to.throw();
        })

    })
    describe('arrangeTheBooks', () => {
        it('works with valid input and returns that there is enough space', () => {
            expect(testLibrary.arrangeTheBooks(10)).to.contain("Great job");
        })
        it('works with valid input and returns that there is NOT enough space', () => {
            expect(testLibrary.arrangeTheBooks(10000)).to.contain("Insufficient space");
        })
        it('trows a msg if input is NaN', () => {
            expect(() => testLibrary.arrangeTheBooks("nAnAnAn")).to.throw();
        })
        it('trows a msg if input is less than zero', () => {
            expect(() => testLibrary.arrangeTheBooks("-1")).to.throw();
        })
    })
})
