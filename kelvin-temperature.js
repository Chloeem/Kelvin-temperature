// Variable for the measurement of Kelvin
const kelvin = 293;

// Converting Kelvin to Celsius
const celsius = kelvin - 273;

// Equation to calculate Farenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounding down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Logging the Fahrenheit result
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit`);

// New feature allowing Newton scale conversion from Celsius

// Converting Celsius to Newton scale
let newton = celsius * (33/100);

// Rounding the Newton temperture
newton = Math.floor(newton);

// Logging the Newton result
console.log(`The temperature is ${newton} in Newton scale`);
