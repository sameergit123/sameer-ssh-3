//An array is a special variable, which can hold more than one value:


const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);



/* **Using the JavaScript Keyword new**

The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.*/


const cars = new Array("Saab", "Volvo", "BMW");
console.log(Cars)


//**Accessing Array Elements**//


const cars = ["Saab", "Volvo", "BMW"];
console.log (cars[0]);


//**changing an Array Elements**


const cars = ["saab", "volvo", "BMW"];
let cars[0] = Toyota;
console.log(cars);

//**converting an Array to String**

//The JavaScript method toString() converts an array to a string of (comma separated) array values.


const fruits = ["Banana", "Orange", "Apple", "Mango"];
frutits1 = fruits.toString();
console.log(fruits1)


//**Access the Full Array**


//With JavaScript, the full array can be accessed by referring to the array name:


const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);



//**Arrays are Objects**

//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for array.

const person = ["John", "Doe", 46];
person1 = person[0];
console.log(person1)


//**The length Property**

//The length property of an array returns the length of an array (the number of array elements).



const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);


//**Accessing the First Array Element**


const fruits = ["Banana", "Orange", "Apple", "Mango"];
first = fruits[0];
console.log(first)


//**Accessing the Last Array Element**


const fruits = ["Banana", "Orange", "Apple", "Mango"];
last = fruits[fruits.length -1];
console.log(last);


//**Adding Array Elements**

//The easiest way to add a new element to an array is using the push() method:

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("lemon");
console.log(fruits);

//**Associative Arrays**

/*Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.*/  


const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"

/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.*/

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

/**The Difference Between Arrays and Objects**

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

**When to Use Arrays. When to use Objects.**
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.


The new keyword can produce some unexpected results:*/

//create an Array with two Elements**

var points = new Array(40, 100);
console.log(points)


//**create an Array with one Elements**

var points = new Array(40);
console.log(points)

//**How to Recognize an Array**

//A common question is: How do I know if a variable is an array?

//The problem is that the JavaScript operator typeof returns "object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
console.log(type)
//The typeof operator returns object because a JavaScript array is an object.


//Solution 1:
//To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

//Array.isArray(fruits);


//Solution 2:
//The instanceof operator returns true if an object is created by a given constructor:
const fruits = ["Banana", "Orange", "Apple"];
fruits instanceof Array;
