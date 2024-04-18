/*Exercice 06.b

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
console.log(message.toUpperCase().trim());
let finalMessage = message.toUpperCase().trim();
let lastLetter = finalMessage.charAt(finalMessage.length-1);
console.log(lastLetter);

//

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
const facialHair = word.slice(5, 10).replace("o", "e");
console.log(facialHair);


//Exercice 7

let num1 = Math.random().toFixed(1) * 10;
let num2 = Math.random().toFixed(1) * 10;
let num3 = Math.random().toFixed(1) * 10;

console.log(num1, num2, num3);

let max = Math.max(num1, num2, num3);
console.log(max);



// Exercice 8
const name = prompt("What is your name?");
const age = prompt("How old are you ?");
const live = prompt("Where do you live ?");

alert(`Welcome ${name}, living in ${live}, aged of ${age} !`);

//

let basePrice = prompt("What's the price without the vat ?")
basePrice = parseInt(basePrice);
let vat = basePrice *21/100;
let priceWithVat = basePrice + vat;
alert(`The price with the vat is ${priceWithVat} € !`);


//

let radius = prompt("What's the radius of your circle ?")
radius = parseInt(radius);
const surface = Math.PI *(radius**2);
alert(`The surface of your cirle is ${surface} m²!`);

//

let num1 = prompt("What's the first number ?");
num1 = parseInt(num1);
let sum = num1;

let num2 = prompt("What's your second number ?");
num2 = parseInt(num2);
sum += num2;

alert(`The sum of those two number is ${sum} !`);
//If we want to change to another operator, we modify the += to smt else (ex : *=, -=,...)

*/
