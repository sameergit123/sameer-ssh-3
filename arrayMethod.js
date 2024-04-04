//**Here are the basic array methods along with simple code examples and brief descriptions:**

//**Array length:**

const array111 = [1, 2, 3];
console.log("array length: " , array111.length); // Outputs: 3


//**Array toString():**

const array222 = [1, 2, 3];
console.log(" array toString : ",array222.toString()); // Outputs: "1,2,3"


//**Array at(): (Note: There's no at() method in JavaScript arrays.)**

const array33 = [1, 2, 3, 4, 5];
const element = array33.at(2); // Accesses the element at index 2
console.log(" array at : ", element); // Outputs: 3


//**Array join():**

const array333 = [1, 2, 3];
console.log(" array join :", array333.join('-')); // Outputs: "1-2-3"


//**Array pop():**

const array444 = [1, 2, 3];
const poppedElement = array444.pop();
console.log("array Popped :", array444); // Ou4tputs: [1, 2]
console.log(" array popped : ",poppedElement); // Outputs: 3


//**Array push():**

const array555 = [1, 2, 3];
array555.push(4);
console.log("array push :" ,array555); // Outputs: [1, 2, 3, 4]


//**Array unshift():**

const array666 = [2, 3];
array666.unshift(1);
console.log( " array unshift : ", array666); // Outputs: [1, 2, 3]


//**Array delete(): (Note: delete is an operator, not a method specifically for arrays.)**

const array22= [1, 2, 3, 4, 5];
delete array22[2]; // Removes the element at index 2
console.log(" delete array : ", array22); // Outputs: [1, 2, undefined, 4, 5]


//**Array concat():**

const array777 = [1, 2];
const array888 = [3, 4];
const concatenatedArray = array777.concat(array888);
console.log(" array concated : " , concatenatedArray); // Outputs: [1, 2, 3, 4]


//**Array copyWithin():**

const array999 = [1, 2, 3, 4, 5];
array999.copyWithin(0, 3);
console.log(" array copywithin :", array999); // Outputs: [4, 5, 3, 4, 5]


//**Array flat():**

const nestedArray = [1, [2, 3], [4, [5]]];
const flattenedArray = nestedArray.flat();
console.log( " array flattenedArray : ", flattenedArray); // Outputs: [1, 2, 3, 4, [5]]


//**Array splice():**

const array000 = [1, 2, 3, 4, 5];
const removedElements = array000.splice(1, 2);
console.log( " array removed elements :" , array000); // Outputs: [1, 4, 5]
console.log( " array removed elements :", removedElements); // Outputs: [2, 3]


//**Array toSpliced(): (Note: There's no toSpliced() method in JavaScript arrays.)**
const array11 = [1, 2, 3, 4, 5];
const splicedArray = array11.toSpliced(2);
console.log(" array spliced : " , splicedArray); // Outputs: [3, 4, 5]
console.log(" array spliced :" , array11); // Outputs: [1, 2]

//**Array slice():**

const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(2);
console.log(" sliced array :" , slicedArray);
console.log( "sliced array : " , array);






