//Exercice 0 

const countTrue = (array) => array.reduce((counter, valeur) => valeur == true ? counter + 1 : counter, 0);
console.log(countTrue([true, false, false, true, false])); 
console.log(countTrue([false, false, false, false])); 
console.log(countTrue([]));