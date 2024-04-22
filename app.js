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



//Exercice 11.b


let name = prompt("What's your name ?");

let choice = prompt("Do you prefer cats of dogs ?");

if(choice === 'cats'){
    alert("Cats are the greatest and softest pets alive !");
} else if (choice === 'dogs'){
    alert('Dogs are the best friend of the man !');
}else{
    alert("That's neither a cat or a dog !");
}



const mystery = "Personn7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

let age = prompt("What's your age ?");
if(age == 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}else if(age < 18){
    alert("Sorry, you are too young to drive this car. Powering off");
}else{
    alert("Powering On. Enjoy the ride!");
}

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) { 
    console.log("YOU GOT IT!!!");
}else {
    console.log("TRY AGAIN");
}



let fruit = prompt("What's your favorite fruit ?").toLowerCase();


if(fruit === "bananas"){
    alert("I like bananas as well !")
}else if(fruit === "strawberry"){
    alert("I LOVE strawberries !!")
}else if(fruit === "grape"){
    let color = prompt("Do you prefer green or purple grapes ?")
    if(color === "green"){
        alert("Green grapes are ok...");
    }else if(color === "purple"){
        alert("I don't like purple grapes.");
    }else{
        alert(`I don't understand that ${color}`);
    }
}else{
    alert(`I don't understand what's a ${fruit}`);
}




//Exercice 12.b

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:

leaderboard.splice(1, 1, 'Luna');

leaderboard.splice(3, 1, 'Draco');
console.log(leaderboard);



const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
];

let list1 = [initialArray [2][1]];
let list2 = [initialArray [4][0]];
let list3 = [initialArray [7][0]];

let list = list3.concat(list1).concat(list2);


console.log(list);

Je teste quelque chose avec mon nouveau pc



//Exercice from the for loop video

const colors = ["Rouge", "Vert", "Bleu", "Orange"];
let phrase = "My favorite colors are : "

for(let i = 0; i < colors.length; i++){
    console.log(phrase + `${colors[i]}`);
}

//Exercice 18

let maxNumber;

do {
    maxNumber = parseInt(prompt("Enter the maximum number:"));
} while (isNaN(maxNumber));
    
let random = Math.floor(Math.random() * maxNumber);
let guess; 


while(true){
    let attempts = 0;
    guess = parseInt(prompt("Guess the number"));
    if(isNaN(guess)){
        alert("This is not a number");
    } else if(guess < random){
        alert("You're lower");
        attempts++;
    } else if (guess > random){
        alert("You're higher");
        attempts++;
    } else{
        break;
    }
}


alert(`Congratulation ! You got it with ${attempts} attempts !`);



//Exercice 20

let todos = [];

while (true) {
    let command = prompt("Please enter a command (new, list, delete, quit):");

    switch (command) {
        case "new":
            let newTodo = prompt("Enter the new todo:");
            todos.push(newTodo);
            alert(`Todo "${newTodo}" added to the list.`);
            break;
        case "list":
            let todoList = "********* TODO LIST *********\n";
            for (let i = 0; i < todos.length; i++) {
                todoList += `${i + 1}. ${todos[i]}\n`;
            }
            alert(todoList);
            break;;
        case "delete":
            let deleteIndex = parseInt(prompt("Enter the number of the todo to delete:")) - 1;
            if (deleteIndex >= 0 && deleteIndex < todos.length) {
                let deletedTodo = todos.splice(deleteIndex, 1);
                alert(`Todo "${deletedTodo}" deleted.`);
            } else {
                alert("Invalid todo number.");
            }
            break;
        case "quit":
            alert("Exiting the program.");
            break;
        default:
            alert("Invalid command. Please try again.");
    }

    if (command === "quit") {
        break;
    }
}

*/







