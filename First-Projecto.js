const Kelvin = 0;
// i make a constant called kelvin using const
const Celsius = Kelvin - 273;
// i convert K to C by subtracting
let fahrenheit = Celsius * (9 / 5) + 32;
// convert F to C
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
