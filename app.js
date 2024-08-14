// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const  fromDollarToYen = (valueInDollars) =>{
    return valueInDollars / 1.07 * 156.5
}
const fromEuroToDollar = (valueInDollar) =>{
    return valueInDollar * 1.07
}
const fromYenToPound = (valueInYen) =>{
    
    return valueInYen / 156.5 * 0.87
}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}