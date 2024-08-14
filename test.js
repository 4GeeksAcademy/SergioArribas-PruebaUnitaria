test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); 

})

test("One Dollar shuld be 511.915888 Yen", function(){
    
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(3.5);
    const expected =3.5 / 1.07 * 156.5
    expect(fromDollarToYen(3.5)).toBeCloseTo(511.915888)
})
test("One Yen shuld be 0.019 Punds", function(){
    const {fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(3,5);
    const expected =3.5 / 156.5 * 0.87
    expect(fromYenToPound(3.5)).toBeCloseTo(0.019)

})