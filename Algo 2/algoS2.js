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

*/
