
/*Array indexOf()
Array lastIndexOf()
Array includes()
Array findIndex()
Array findLast()
Array findLastIndex()

**Array indexOf()**

The indexOf() method searches an array for an element value and returns its position.*/


const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") ;
console.log( " Array indexOf() :" + position)


/*Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

**Array lastIndexOf()**

Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.*/


const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits.lastIndexOf("Apple") ;
console.log(" Array lastIndexOf() : " + position1)



/***JavaScript Array includes()**

Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).*/


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2.includes("Mango");
console.log(" Array includes()  :" + fruits2)


/***JavaScript Arrayfind()**

JavaScript Array find()
The find() method returns the value of the first array element that passes a test function.*/


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(number => number === 20);
console.log(" array find()  :" + first);



/***JavaScript Array findLast() Method**

ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.*/

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log("Array findLast()  :" + high)


/***JavaScript Array findLastIndex() Method**

The findLastIndex() method finds the index of the last element that satisfies a condition.*/

const temp1 = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(" array findLastIndex() : " + pos)