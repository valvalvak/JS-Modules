const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('Test Numbers', () => {

    describe('sumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });
        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(3, -4)).to.equal('-1.00');
        });
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(1.3333, 1.3333)).to.equal('2.67');
        });
        it('returns undefined with string parameters', () => {
            expect(testNumbers.sumNumbers("5", "5")).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, "5")).to.equal(undefined);
            expect(testNumbers.sumNumbers("5", 2)).to.equal(undefined);
        });
        it('returns undefined with invalid parameters', () => {
            expect(testNumbers.sumNumbers({}, [])).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, [])).to.equal(undefined);
            expect(testNumbers.sumNumbers({}, 2)).to.equal(undefined);
        });
    });
    describe('numberChecker', () => {
        it('works with positive even number', () => {
            expect(testNumbers.numberChecker('4')).to.contain('even');
        });

        it('works with positive odd number', () => {
            expect(testNumbers.numberChecker('3')).to.contain('odd');
        });

        it('works with negative even number', () => {
            expect(testNumbers.numberChecker('-12')).to.contain('even');
        });

        it('works with negative odd number', () => {
            expect(testNumbers.numberChecker('-13')).to.contain('odd');
        });

        it('works with zero', () => {
            expect(testNumbers.numberChecker('0')).to.contain('even');
        });

        it('reports it is not a number', () => {
            expect(() => testNumbers.numberChecker('NAN')).to.throw();
        });

    });
    describe('averageSumArray', () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });

        it('works with floats', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });

});
