const testNumbers = require("./testNumbers");
const { expect } = require("chai");


describe("Test Numbers", () => {

    describe("sumNumbers", () => {
        it("works with valid numbers", () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal("8.00")
        });
        it("works with negative numbers", () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal("-2.00")
        });
        it("works with floating point numbers", () => {
            expect(testNumbers.sumNumbers(1.3333, 1.3333)).to.equal("2.67")
        });
        it()
    });
    
    describe("numberChecker", () => {

    });
    
    describe("averageSumArray", () => {

    });

});