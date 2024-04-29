//SERIE 1

//Exercice 0 
/*
const countTrue = (array) => array.reduce((counter, valeur) => valeur == true ? counter + 1 : counter, 0);
console.log(countTrue([true, false, false, true, false])); 
console.log(countTrue([false, false, false, false])); 
console.log(countTrue([]));


//Exercice 1

const possibleBonus = (a, b) => b - a >= 1 && b - a <= 6 ? true : false;
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));



//Exercice 2


function num_of_digits(a) {     
    let aString= a.toString(); 
    let aLeng = aString.length;  
    return aLeng; 
}  
console.log(num_of_digits(1000)); 
console.log(num_of_digits(12)); 
console.log(num_of_digits(1305981031)); 
console.log(num_of_digits(0));



const num_of_digits = (a) => a.toString().length;

console.log(num_of_digits(1000)); 
console.log(num_of_digits(12)); 
console.log(num_of_digits(1305981031)); 
console.log(num_of_digits(0));



//Exercice 3

const toArray = (objet) => Object.entries(objet);

console.log(toArray({nom : "John", age : "23"}));



//Exercice 4

function arrayOfMultiples1 (num, length){
    let array = [];
    for(let i = 1; i <=length; i++){
        array.push(num*i);
    }
    return array;
}

console.log(arrayOfMultiples1(7, 5));



//Exercice 5

const removeLeadingTrailing = (n) => parseFloat(n);

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("30"));



//One linear Exercice 8

const occurencies = (string, letter) => string.split('').filter(char => char === letter).length;
                                    //Ou alors[...map] pour parcourir le string
console.log(occurencies("hello", "l"));
console.log(occurencies("abracadabra", "a"));

//Exercice 6

const sortIt = (tableau) => [...tableau.sort()];

console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]))
console.log(sortIt([[3], 4, [2], [5], 1, 6]))



//Exercice 7

function calculator (a, string, b){
    switch(string){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            if(b == 0){
                return "Can't divide by 0!";
            } else {
                return a/b;
            }
    }
}
console.log(calculator(2, "+", 2));
console.log(calculator(2, "/", 0));



//Exercice 8
const landmass = 148940000;

const areaOfCountry = (land, area) => `${land} is ${((area/landmass)*100).toFixed(2)}% of the total world's landmass`;

console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));



//Exercice 9

function reverseWords(string){
    let x = string.split(' ')
    if(x.length >= 2){
        [x[0], x[x.length -1]] = [x[x.length -1], x[0]];
        return x.join(' ').trim();
    }
}


const reverseWords =  (string) => string.split(' ').filter((x) => x).reverse().join(' ');

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));



//SERIE 2
//Exercice 0

function oddishOrEvenish(number){
    let x = number.toString();
    let somme =0;

    for(let i = 0; i < x.length; i++){
        somme += parseFloat(x[i]);
    }
    if(somme % 2 == 0){
        return "Evenish";
    } else {
        return "Oddish";
    }
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));


//Exercice 1

const getTotalPrice = (groceries) => groceries.reduce((total, grocery) => total + (grocery.price * grocery.quantity), 0);


console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
]))
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]))


//Exercice 2

function reverseOdd(word){
    let x = word.split(' ');

    for(let i = 0; i < x.length; i++){
        if(x[i].length % 2 !== 0){
            x[i] = x[i].split("").reverse().join('');
        }
    }
    return x.join(' ')
}

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));



//Exercice 3

function isSmooth(sentence){
    let word = sentence.split(' ');

    for(let i = 0; i < word.length - 1; i++){
        const first = word[i].toLowerCase();
        const second = word[i+1].toLowerCase();

        if(first.charAt(first.length -1) !== second.charAt(0)){
            return false;
        }
    }
    return true;
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));



//Exercice 4

function sevenBoom(numbers){
    let x = numbers.toString().split('');

    if(x.includes("7")){
        return "Boom";
    }else {
        return "there is no 7 in the array";
    }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));



//Exercice 5

function convert(temp){
    if(temp.includes("C")){
        return `${((parseFloat(temp) * 9/5) + 32).toFixed(0)}°F`;
    } else if(temp.includes("F")){
        return `${((parseFloat(temp) - 32) *5/9).toFixed(0)}°C`;
    } else{
        return "Error";
    }
}

console.log(convert("35°C"));
console.log(convert("19°F"));
console.log(convert("33"));


//Exercice 6

function findBrokenKeys(word1, word2){
    let x = word1.split('');
    let y = word2.split('');
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        // Compare les caractères correspondants
        if (x[i] !== y[i] && !arr.includes(x[i])) {
                arr.push(x[i]);
        }
    }
    return arr;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));

*/