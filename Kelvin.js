/*I conducted this project thanks to the content of Codecademy.
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With my knowledge of JavaScript,I converted Kelvin to Celsius, then to Fahrenheit.
*/
//The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
//The value saved to kelvin will stay constant. Choose the variable type with this in mind.
const kelvin = 293;
/*Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.*/
const celcius = kelvin - 273;
//Fahrenheit equation Fahreneit=Celcius*9/5+32
let fahreneit = celcius * 9 / 5 + 32;
//Round down the Fahrenheit temperature
fahreneit = Math.floor(fahreneit);
console.log("The temperature is " + fahreneit + " degrees Fahrenheit.");
//Converting celius to Newton
let newton = celcius * (33 / 100);
newton = Math.floor(newton);
console.log("The temperature is " + newton + " degrees Newton.")