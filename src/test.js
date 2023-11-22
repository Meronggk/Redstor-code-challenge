const { expect } = require('chai');
const { pricingRules, Checkout } = require("./main");

const runTest = (basket, expectedTotal) => {

    const checkout1 = new Checkout(pricingRules);
        for(let i = 0; i < basket.length; i++) {
            checkout1.scan(basket[i]);
    }
    const actualTotal = checkout1.calculateTotal();
    expect(actualTotal).to.equal(expectedTotal);

    //console.log(actualTotal === expectedTotal, `expected: ${expectedTotal}, actual: ${actualTotal}, basket: ${basket}`);
    console.assert(actualTotal === expectedTotal, `expected: ${expectedTotal}, actual: ${actualTotal}, basket: ${basket}`);
}


runTest ("A", 60)
runTest ("AB", 90)
runTest ("CDBA", 145)
runTest("AA", 120)
runTest("AAA", 150)
runTest("AAAA", 210)
runTest("AAAAA", 270)
runTest("AAAAAA", 300)
runTest("AAAB", 180)
runTest("AAABB", 195)
runTest("AAABBD", 220)
runTest("DABABA", 220)
// runTest("G", null)
// runTest("AAGAB", null)