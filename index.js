var functions = require('./calculate');

var userInput = process.argv[2]
var userInput1 = process.argv[3]
var userInput2 = process.argv[4]
var userInput3 = process.argv[5]

const rgbToHslValue = functions.rgbToHsl((parseInt(userInput1)),(parseInt(userInput2)),(parseInt(userInput3)));
const hexToRgbValue = functions.hexToRgb(userInput1);
const hexToHslValue = functions.rgbToHsl((hexToRgbValue.r),(hexToRgbValue.g),(hexToRgbValue.b))

var r = 255;
var b = 0;
var g = 0;

// this special console will create colored output
console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, myOutput);

if (userInput == 'hex') {
    console.log(`rgb( ${hexToRgbValue.r} ${hexToRgbValue.g} ${hexToRgbValue.b} )`);
    console.log(`${hexToHslValue.h} ${hexToHslValue.s} ${hexToHslValue.l}`);

} else if (userInput == 'rgb') {
    console.log(`${functions.rgbToHex((parseInt(userInput1)),(parseInt(userInput2)),(parseInt(userInput3)))}`)
    console.log(`${rgbToHslValue.h} ${rgbToHslValue.s} ${rgbToHslValue.l}`);
}


