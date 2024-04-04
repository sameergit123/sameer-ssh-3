//An array is a special variable, which can hold more than one value:


const cars1 = ["Saab", "Volvo", "BMW"];
console.log(cars1);



/* **Using the JavaScript Keyword new**

The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.*/


const cars2 = new Array("Saab", "Volvo", "BMW");
console.log(cars2)


//**Accessing Array Elements**//


const cars3 = ["Saab", "Volvo", "BMW"];
console.log (cars3[0]);


//**changing an Array Elements**

const cars40 = ["saab", "volvo", "BMW"];
cars40[0] = "Toyota"; // Correcting the value at index 0
console.log(cars40);


//**converting an Array to String**

//The JavaScript method toString() converts an array to a string of (comma separated) array values.


const fruits22 = ["Banana", "Orange", "Apple", "Mango"];
fruits111= fruits22.toString();
console.log(fruits111)


//**Access the Full Array**


//With JavaScript, the full array can be accessed by referring to the array name:


const cars5 = ["Saab", "Volvo", "BMW"];
console.log(cars5);



//**Arrays are Objects**

//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for array.

const person = ["John", "Doe", 46];
person11 = person[0];
console.log(person11)


//**The length Property**

//The length property of an array returns the length of an array (the number of array elements).



const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits2.length;
console.log(size);


//**Accessing the First Array Element**


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
first = fruits3[0];
console.log(first)


//**Accessing the Last Array Element**


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
last = fruits4[fruits4.length -1];
console.log(last);


//**Adding Array Elements**

//The easiest way to add a new element to an array is using the push() method:

const fruits5 = ["Banana", "Orange", "Apple"];
fruits5.push("lemon");
console.log(fruits5);

//**Associative Arrays**

/*Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.*/  


const person1 = [];
person1[0] = "John";
person1[1] = "Doe";
person1[2] = 46;
person1.length;    // Will return 3
person1[0];        // Will return "John"
console.log(person1[0] + person1[2]);



/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.*/

/*const person2 = [];
person2["firstName"] = "John";
person2["lastName"] = "Doe";
person2["age"] = 46;
    // Will return 0
       // Will return undefined
console.log(person2[lastName] + person2[firstName]);*/
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

const fruits33 = ["Banana", "Orange", "Apple"];
let type = typeof fruits33;
console.log(type)
//The typeof operator returns object because a JavaScript array is an object.


//Solution 1:
//To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

//Array.isArray(fruits);


//Solution 2:
//The instanceof operator returns true if an object is created by a given constructor:

const fruits222 = ["Banana", "Orange", "Apple"];
console.log("instanceof :" , fruits222 instanceof Array)
