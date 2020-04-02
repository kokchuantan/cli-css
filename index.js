var functions = require('./calculate');

var userInput = process.argv[2]
var userInput1 = process.argv[3]
var userInput2 = process.argv[4]
var userInput3 = process.argv[5]

const rgbToHslValue = functions.rgbToHsl((parseInt(userInput1)),(parseInt(userInput2)),(parseInt(userInput3)));
const hexToRgbValue = functions.hexToRgb(userInput1);
const rgbToHexValue = functions.rgbToHex((parseInt(userInput1)),(parseInt(userInput2)),(parseInt(userInput3)))


if (userInput == 'hex') {
    const hexToHslValue = functions.rgbToHsl((hexToRgbValue.r),(hexToRgbValue.g),(hexToRgbValue.b))
    console.log(`rgb( ${hexToRgbValue.r} ${hexToRgbValue.g} ${hexToRgbValue.b} )`);
    console.log(`${hexToHslValue.h} ${hexToHslValue.s} ${hexToHslValue.l}`);

} else if (userInput == 'rgb') {
    console.log(rgbToHexValue)
    console.log(`${rgbToHslValue.h} ${rgbToHslValue.s} ${rgbToHslValue.l}`);
}


