//Array forEach()


const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(number1 => {
    console.log(" ARRAY FOREACH() " + numbers1);
});



//**Array map():**


const numbers2 = [1, 2, 3, 4, 5];
const doubled = numbers2.map(number2 => {
    return number2 * 2;
});
console.log("ARRAY MAP : " + doubled); // Output: [2, 4, 6, 8, 10]


//**Array flatMap():**

const numbers3 = [1, 2, 3];
const doubledAndFlattened = numbers3.flatMap(number3 => {
    return [number3, number3 * 2];
});
console.log(" ARRAY FLATMAPT() : " + doubledAndFlattened);




//**Array filter():**

const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter(number4 => {
    return number4 % 2 === 0;
});
console.log( "ARRAY FILTER ()  :"+ evenNumbers); // Output: [2, 4]


//**Array reduce():**


const numbers5 = [1, 2, 3, 4, 5];
const sum = numbers5.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(" ARRAY REDUCE : " + sum); // Output: 15


//**Array reduceRight():**

const numbers6 = [1, 2, 3, 4, 5];
const sum1 = numbers6.reduceRight((accumulator, currentValue) => {
    return accumulator - currentValue;
});
console.log("ARRAY REDUCERIGHT() : " + sum1); // Output: -5

 

//Array every():**


const numbers7 = [1, 2, 3, 4, 5];
const allPositive = numbers7.every(number => {
    return number > 0;
});
console.log( "ARRAY EVERY (): " + allPositive); // Output: true


//**Array some():**

const numbers8 = [1, 2, 3, 4, 5];
const hasNegative = numbers8.some(number => {
    return number < 0;
});
console.log( " ARRAY SOME () : " + hasNegative); // Output: false



//**Array from():**


const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};
const newArray = Array.from(arrayLike);
console.log("ARRAY FROM () : " + newArray); // Output: ['a', 'b', 'c']



//**Array keys():**


const numbers9 = [1, 2, 3];
const iterator = numbers9.keys();
for (const key of iterator) {
    console.log( "ARRAYS KEYS : " + key);
}


//**Array entries():**


const numbers10 = ['a', 'b', 'c'];
const iterator1 = numbers10.entries();
for (const [index, value] of iterator1) {
    console.log("ARRAY ENTRIES : " + index, value);
}


//**Array Spread (...):**


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log( " ARRAY SPREAD (...) : " + mergedArray); // Output: [1, 2, 3, 4, 5, 6]

