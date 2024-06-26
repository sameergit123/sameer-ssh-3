#                                                       JAVASCRIPT STRING METHODS
JavaScript string methods are built-in functions that operate on strings, allowing developers to manipulate, transform, or extract information from strings easily. These methods are part of the String object and can be accessed through any string variable or literal by using dot notation.

**Basic string Methods**

String length
String charAt()
String charCodeAt()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

**1.JAVASCRIPT STRING LENGHT**


JavaScript's length property for strings returns the number of characters in a string. Here's a simple explanation with a code example

```bash
let myString = "Hello, World!";

let lengthOfString = myString.length;

console.log("Length of the string:", lengthOfString);
```

**2.Extracting String Characters**

There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays

**2.1  JavaScript String charAt()**

The charAt() method in JavaScript returns the character at a specified index within a string.

let myString = "Hello";

let charAtIndex1 = myString.charAt(1);

console.log("Character at index 1:", charAtIndex1);

```bash
let myString = "Hello";

let charAtIndex1 = myString.charAt(1);

console.log("Character at index 1:", charAtIndex1);
```
**2.2 JavaScript String charCodeAt()**

The charCodeAt() method in JavaScript returns the Unicode value of the character at a specified index within a string.

```bash

let myString = "Hello";

let charCodeAt1 = myString.charCodeAt(1);

console.log("Unicode value of character at index 1:", charCodeAt1);
```

**2.3 JavaScript String at()**

The at() method returns the character at a specified index (position) in a string.

The at() method is supported in all modern browsers since March 2022:

```bash
const name = "W3Schools";
let letter = name.at(2);

console.log(letter);
```

**2.4 Property Acess STRING[]**
```bash
const name = "W3Schools";
let letter = name[2];
console.log(letter);
```
**3.Extracting String Parts**
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)

**3.1 JavaScript String slice()**
slice() extracts a part of a string and returns the extracted part in a new string.
```bash
let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
console.log(part);
```

**3.2 JavaScript String substring()**

substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().
```bash
let str = "Apple, Banana, Kiwi";
let part = str.substring(-7,13);
console.log(part);
```
**3.3 JavaScript String substr()**

substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

```bash
let str = "Apple, Banana, Kiwi";
let part = str.substr(7,6);
console.log(part);
```
**4.converting uppercase and lower case**
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

**4.1 JavaScript String toUpperCase()**
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript String Methods</h1>
<p>Convert string to upper case:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Hello World!</p>

```bash
<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toUpperCase();
}
</script>

</body>
</html>
```
**4.2 javascript string tolowercase()**
```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript String Methods</h1>
<p>Convert string to lower case:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Hello World!</p>

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.toLowerCase();
}
</script>

</body>
</html>
```
**5. JavaScript String concat()**
concat() joins two or more strings

```bash
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
console.log(text3);
```

**6.javascript string trim**
The trim() method removes whitespace from both sides of a string:'
```bash
let text1 = "     Hello World!     ";
let text2 = text1.trim();

console.log(text1)
console.log(text2)
```

**6.1 javascript string trimstart()**

The trimStart() method works like trim(), but removes whitespace only from the start of a string.



```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The trimStart() Method</h2>

<p id="demo"></p>

<script>
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
</script>
```

</body>
</html>

**6.2JavaScript String trimEnd()**

The trimEnd() method works like trim(), but removes whitespace only from the end of a string
```bash
let text1 = "     hello     ";
let text2 = text1.trimend();
console.log(text1);
console.log(text2);
```


**7.JavaScript String Padding**

The padStart() method pads a string from the start.

```bash
let text = "5";
text1 = text.padStart(2,"44");
console.log(text1)
```
**7.1 JavaScript String padEnd()**
The padEnd() method pads a string from the end

```bash
let text = "5";
text1 = text.padEnd(2,"44");
console.log(text1)
```

**8.JavaScript String repeat()**

The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

```bash
let text = "Hello world!";
let result = text.repeat(2);
console.log(result);
```
**9.Replacing String Content**

The replace() method replaces a specified value with another value in a string:

To replace case insensitive, use a regular expression with an /i flag (insensitive):

To replace all matches, use a regular expression with a /g flag (global match):

```bash
<!DOCTYPE html>
<html>

<body>

<h1>JavaScript String Methods</h1>
<p>Replace "Microsoft" with "W3Schools" in the paragraph below:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo">Please visit Microsoft!</p>

<script>
function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  document.getElementById("demo").innerHTML =
  text.replace("Microsoft","W3Schools");
}
</script>

</body>
</html>
```

**9.1 Replace ALL()**

The replaceAll() method allows you to specify a regular expression instead of a string to be replaced

```bash
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Strings</h1>
<h2>The replaceAll() Method</h2>

<p>ES2021 intoduced the string method replaceAll().</p>

<p id="demo"></p>

<script>
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

**10.JavaScript String split()**

A string can be converted to an array with the split() method:
```bash
const word = "hello";
const characters = word.split("");
console.log(characters);
```


#                                                         JavaScript String Search

String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()

**1.string indexOf()**
The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The indexOf() Method</h2>

<p>The indexOf() method returns the position of the first occurrence of a string in a string.</p>
<p>The position of the first occurrence of "locate" is:</p>
<p id="demo"></p>

<script>
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
document.getElementById("demo").innerHTML = index; 
</script>

</body>
</html>
```

**2.1 string lastIndexOf()**

The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
```bash

let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index);
```

**3. JavaScript String search()**

The search() method searches a string for a string (or a regular expression) and returns the position of the match:

```bash
let text = "Please locate where 'locate' occurs!";
let index = text.search("locate");
console.log(index);
```

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions)


**4.JavaScript String match()**

The match() method returns an array containing the results of matching a string against a string (or a regular expression).

```bash
let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match("ain");
console.log(myArr)
```

Perform a global search for "ain":
```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The match() Method</h2>

<p>Perform a global search for "ain":</p>

<p id="demo"></p>

<script>
let text = "The rain in SPAIN stays mainly in the plain"; 
const myArr = text.match(/ain/g);
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
</script>

</body>
</html>
```
Perform a global, case-insensitive search for "ain":
```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The match() Method</h2>

<p>Perform a global, case-insensitive search for "ain":</p>

<p id="demo"></p>

<script>
let text = "The rain in SPAIN stays mainly in the plain"; 
const myArr = text.match(/ain/gi);
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
</script>

</body>
</html>
```

**5.JavaScript String matchAll()**
The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

matchAll() does not work in Internet Explorer.

```bash
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The matchAll() Method</h2>

<p>ES2020 intoduced the string method matchAll().</p>

<p id="demo"></p>

<script>
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");

document.getElementById("demo").innerHTML = Array.from(iterator);
</script>
</body>
</html>
```

**6.JavaScript String includes()**

The includes() method returns true if a string contains a specified value.

Otherwise it returns false.

```bash
let text = "Hello world, welcome to the universe.";
let text1 = text.includes("world");
console.log(text1)
```

**7.JavaScript String startsWith()**

The startsWith() method returns true if a string begins with a specified value.

Otherwise it returns false:

```bash
let text = "Hello world, welcome to the universe.";
let text1= text.startsWith("Hello");
console.log(text1)
```
**8. Javascript string EndsWith()**

The endsWith() method returns true if a string ends with a specified value.

Otherwise it returns false:
```bash

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>

<p>Check if a string ends with "Doe":</p>

<p id="demo"></p>

<p>The endsWith() method is not supported in Internet Explorer.</p>

<script>
let text = "John Doe";
document.getElementById("demo").innerHTML = text.endsWith("Doe");
</script>

</body>
</html>
```
#                                                       JAVA SCRIPT STRING TEMPALATES

**Back-Tics Syntax**

Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
 ``` bash
 let text = `Hello world`;
 console.log(text)
```
**Quotes Inside Strings**

Template Strings allow both single and double quotes inside a string:

let text = `He's often called "Johnny"`;
console.log(text)

**Interpolation**

Template String provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.
The syntax is:

```${...} ```

***Variable Substitutions**

Template Strings allow variables in strings:

```bash

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)

```

#                                                         JAVASCRIPT ARRAYS                                     

An array is a special variable, which can hold more than one value:

``` bash
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

```

**Using the JavaScript Keyword new**

The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.

```bash
const cars = new Array("Saab", "Volvo", "BMW");
console.log(Cars)
```

**Accessing Array Elements**

```bash
const cars = ["Saab", "Volvo", "BMW"];
console.log (cars[0]);
```

**changing an Array Elements**

```bash
const cars = ["saab", "volvo", "BMW"];
let cars[0] = Toyota;
console.log(cars);
```
**converting an Array to String**

The JavaScript method toString() converts an array to a string of (comma separated) array values.

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
frutits1 = fruits.toString();
console.log(fruits1)
```

**Access the Full Array**


With JavaScript, the full array can be accessed by referring to the array name:

```bash
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
```


**Arrays are Objects**

Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for array.
```bash
const person = ["John", "Doe", 46];
person1 = person[0];
console.log(person1)
```

**The length Property**

The length property of an array returns the length of an array (the number of array elements).


```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);
```

**Accessing the First Array Element**

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
first = fruits[0];
console.log(first)
```

**Accessing the Last Array Element**

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
last = fruits[fruits.length -1];
console.log(last);
```

**Adding Array Elements**

The easiest way to add a new element to an array is using the push() method:

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("lemon");
console.log(fruits);

**Associative Arrays**

Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  

```bash
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
```
WARNING !!
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.

 Example:
```bash
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
```
**The Difference Between Arrays and Objects**

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

**When to Use Arrays. When to use Objects.**
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.


The new keyword can produce some unexpected results:

**create an Array with two Elements**
```bash
var points = new Array(40, 100);
console.log(points)
```

**create an Array with one Elements**
```bash
var points = new Array(40);
console.log(points)
```
**How to Recognize an Array**

A common question is: How do I know if a variable is an array?
```bash
The problem is that the JavaScript operator typeof returns "object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
The typeof operator returns object because a JavaScript array is an object.
```
```bash
Solution 1:
To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

Array.isArray(fruits);
```
```bash
Solution 2:
The instanceof operator returns true if an object is created by a given constructor:
const fruits = ["Banana", "Orange", "Apple"];
fruits instanceof Array;
```

#                                                          ARRAY METHODS


**Here are the basic array methods along with simple code examples and brief descriptions:**

**Array length:**

const array = [1, 2, 3];
console.log(array.length); // Outputs: 3
Description: Returns the number of elements in the array.

**Array toString():**


const array = [1, 2, 3];
console.log(array.toString()); // Outputs: "1,2,3"
Description: Converts the array to a string, joining the elements with commas.

**Array at(): (Note: There's no at() method in JavaScript arrays.)**

**Array join():**


const array = [1, 2, 3];
console.log(array.join('-')); // Outputs: "1-2-3"
Description: Joins all elements of the array into a single string using the specified separator.

**Array pop():**


const array = [1, 2, 3];
const poppedElement = array.pop();
console.log(array); // Outputs: [1, 2]
console.log(poppedElement); // Outputs: 3
Description: Removes the last element from the array and returns that element.

**Array push():**


const array = [1, 2, 3];
array.push(4);
console.log(array); // Outputs: [1, 2, 3, 4]
Description: Adds one or more elements to the end of the array and returns the new length of the array.

**Array unshift():**


const array = [2, 3];
array.unshift(1);
console.log(array); // Outputs: [1, 2, 3]
Description: Adds one or more elements to the beginning of the array and returns the new length of the array.

**Array delete(): (Note: delete is an operator, not a method specifically for arrays.)**

**Array concat():**


const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Outputs: [1, 2, 3, 4]
Description: Concatenates the arrays or values provided as arguments, returning a new array.

**Array copyWithin():**


const array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3);
console.log(array); // Outputs: [4, 5, 3, 4, 5]
Description: Copies a sequence of array elements within the array, overwriting the existing elements.

**Array flat():**


const nestedArray = [1, [2, 3], [4, [5]]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Outputs: [1, 2, 3, 4, [5]]
Description: Flattens nested arrays to the specified depth or completely if no depth is provided.

**Array splice():**


const array = [1, 2, 3, 4, 5];
const removedElements = array.splice(1, 2);
console.log(array); // Outputs: [1, 4, 5]
console.log(removedElements); // Outputs: [2, 3]
Description: Adds or removes elements from the array, returning the removed elements.

**Array toSpliced(): (Note: There's no toSpliced() method in JavaScript arrays.)**

**Array slice():**

const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(2);
console.log(slicedArray); // Outputs: [3, 4, 5]
Description: Extracts a section of the array and returns a new array containing the extracted elements.


#                                                      JAVASCRIPT ARRAY SEARCH

Array indexOf()
Array lastIndexOf()
Array includes()
Array findIndex()
Array findLast()
Array findLastIndex()

**Array indexOf()**

The indexOf() method searches an array for an element value and returns its position.

```bash
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") ;
console.log(let position)
```

Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

**Array lastIndexOf()**

Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

```bash
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") ;
console.log(position)
```


**JavaScript Array includes()**

Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.includes("Mango");
console.log(fruit)
```

**JavaScript Arrayfind()**

JavaScript Array find()
The find() method returns the value of the first array element that passes a test function.

```bash
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(number => number === 20);
console.log(first);

```


**JavaScript Array findLast() Method**

ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
```bash
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high)
```
**JavaScript Array findLastIndex() Method**

The findLastIndex() method finds the index of the last element that satisfies a condition.

```bash
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos)
```
#                                                      JAVASCRIPT SORTING ARRAYS

Alpabetic Sort
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects

Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()


ALPHABETIC SORT

**ARRAY SORT()**

The sort() method sorts an array alphabetically.

```bash
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.sort()
console.log(fruit)
```
**Reversing an Array**

The reverse() method reverses the elements in an array:

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.reverse();
console.log(fruit)
```

**Numeric sort**

```bash
const points = [40, 100, 1, 5, 25, 10];
console.log(points) 

asscendigOrder = points.sort(function(a, b){return a - b});
console.log(points)
```

**The Compare Function**
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

```bash
<button onclick="myFunction1(points)">Sort Alphabetically</button>
<button onclick="myFunction2(points)">Sort Numerically</button>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1(arr) {
  arr.sort();
  document.getElementById("demo").innerHTML = arr;
}

function myFunction2(arr) {
  arr.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = arr;
}

```
**Using Math.min() on an Array**

You can use Math.min.apply to find the lowest number in an array:

```bash

const points = [40, 100, 1, 5, 25, 10];
const smallestNumber = myArrayMin(points);
console.log(smallestNumber);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

```
**Using Math.max() on an Array**

You can use Math.max.apply to find the highest number in an array:

```bash
const points = [40, 100, 1, 5, 25, 10];
const largestNumber = myArrayMax(points);
console.log(largestNumber);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

```

#                                                       JAVASCRIPT ARRAY ITERATION

**Array forEach**

```BASH
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number);
});
```
Explanation: forEach iterates over each element of the array and executes a provided function for each element. In this case, it logs each number in the array to the console.

**Array map():**

```BASH
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => {
    return number * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```
Explanation: map creates a new array by applying a function to each element of the original array. Here, it doubles each number in the array.

**Array flatMap():**

```BASH
const numbers = [1, 2, 3];
const doubledAndFlattened = numbers.flatMap(number => {
    return [number, number * 2];
});
console.log(doubledAndFlattened); // Output: [1, 2, 2, 4, 3, 6]
```
Explanation: flatMap is like map, but it flattens the result into a new array. Here, it doubles each number in the array and flattens the result.

**Array filter():**
```BASH
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
```
Explanation: filter creates a new array with only the elements that pass a test implemented by the provided function. In this example, it filters out the even numbers.

**Array reduce():**
```BASH

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15
```
Explanation: reduce applies a function against an accumulator and each element in the array to reduce it to a single value. Here, it calculates the sum of all numbers in the array.

**Array reduceRight():**
```BASH
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduceRight((accumulator, currentValue) => {
    return accumulator - currentValue;
});
console.log(sum); // Output: -5
```
Explanation: reduceRight works similarly to reduce, but it processes the array from right to left.

**Array every():**
```BASH

const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(number => {
    return number > 0;
});
console.log(allPositive); // Output: true
```
Explanation: every tests whether all elements in the array pass the provided function. Here, it checks if all numbers in the array are positive.

**Array some():**
```BASH
const numbers = [1, 2, 3, 4, 5];
const hasNegative = numbers.some(number => {
    return number < 0;
});
console.log(hasNegative); // Output: false
```
Explanation: some tests whether at least one element in the array passes the provided function. Here, it checks if there are any negative numbers in the array.

**Array from():**

```BASH
const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};
const newArray = Array.from(arrayLike);
console.log(newArray); // Output: ['a', 'b', 'c']
```
Explanation: from creates a new, shallow-copied array instance from an array-like or iterable object. Here, it converts an array-like object into a proper array.

**Array keys():**

```BASH
const numbers = [1, 2, 3];
const iterator = numbers.keys();
for (const key of iterator) {
    console.log(key);
}
```
Explanation: keys returns a new Array Iterator object that contains the keys for each index in the array. Here, it logs the keys (indices) of the array.

**Array entries():**


```BASH
const numbers = ['a', 'b', 'c'];
const iterator = numbers.entries();
for (const [index, value] of iterator) {
    console.log(index, value);
}
```
Explanation: entries returns a new Array Iterator object that contains the key/value pairs for each index in the array. Here, it logs the index and value of each element in the array.

**Array Spread (...):**

```BASH
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
```
Explanation: Spread syntax (...) allows an iterable (like an array) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. Here, it merges two arrays into one.

#                                                             JAVASCRIPT DATES

***Creating Date Objects
Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

```BASH
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)
```
**JavaScript new Date()**

new Date() creates a date object with the current date and time:

```bash
const d = new Date();
console.log(d);
```

**new Date(date string)**

new Date(date string) creates a date object from a date string

```bash
const d = new Date("October 13, 2014 11:13:00");
console.log(d);
```
**Using 6, 4, 3, or 2 Numbers**


```bash
const d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);
```

**Previous Century**

One and two digit years will be interpreted as 19xx:

```bash
const d = new Date(99, 11, 24);
console.log(d)
```

#                                                               JAVASCRIPT DATE FORMATES

**JavaScript Date Input**

There are generally 3 types of JavaScript date input formats:

Type	           Example
ISO Date	    "2015-03-25" (The International Standard)
Short Date   	"03/25/2015"
Long Date	    "Mar 25 2015" or "25 Mar 2015"


**Time Zones**

When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

When getting a date, without specifying the time zone, the result is converted to the browser's time zone.


**JavaScript Short Dates.**

Short dates are written with an "MM/DD/YYYY" syntax like this:

```bash
const d = new Date("03/25/2015");
console.log(d);
```

**JavaScript Long Dates.**

Long dates are most often written with a "MMM DD YYYY" syntax like this:

```bash
const d = new Date("Mar 25 2015");
console.log(d)
```


#                                                               JavaScript Get Date Methods


Date Get Methods

Method	                               Description

getFullYear()              	Get year as a four digit number (yyyy)
getMonth()	                Get month as a number (0-11)
getDate()	                  Get day as a number (1-31)
getDay()	                  Get weekday as a number (0-6)
getHours()                 	Get hour (0-23)
getMinutes()	              Get minute (0-59)
getSeconds()	              Get second (0-59)
getMilliseconds()         	Get millisecond (0-999)
getTime()	                  Get time (milliseconds since January 1, 1970)




**The getFullYear() Method**

The getFullYear() method returns the year of a date as a four digit number

const d = new Date();
console.log(d.getFullYear());


**The getMonth() Method**

The getMonth() method returns the month of a date as a number (0-11).

```bash
const d = new Date();
console.log(d.getMonth());
```

```bash
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
console.log(month);
```

**The getDate() Method**

The getDate() method returns the day of a date as a number (1-31)

const d = new Date();
console.log(d.getDate());


**The getHours() Method**

The getHours() method returns the hours of a date as a number (0-23):

```bash
const d = new Date();
console.log(d.getHours());
```


#                                                               JavaScript Set Date Methods


Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

Set Date Methods
Set Date methods are used for setting a part of a date:
 

 
 Method	                              Description

setDate()	                      Set the day as a number (1-31)
setFullYear()	                  Set the year (optionally month and day)
setHours()	                    Set the hour (0-23)
setMilliseconds()	              Set the milliseconds (0-999)
setMinutes()	                  Set the minutes (0-59)
setMonth()	                    Set the month (0-11)
setSeconds()	                  Set the seconds (0-59)
setTime()	                      Set the time (milliseconds since January 1, 1970)

**The setFullYear() Method**

The setFullYear() method sets the year of a date object. In this example to 2020:

```bash
const d = new Date();
console.log(d.setFullYear(2020));
```

#                                                 JAVASCRIPT RANDOM

**Math.random()**

Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
```bash

let randomNumber = Math.random();
console.log(randomNumber); // Output: A random number between 0 and 1 (e.g., 0.3789)

```

**JavaScript Random Integers**

Math.random() used with Math.floor() can be used to return random integers.

```bash
let randomNumber = Math.floor(Math.random());
console.log(randomNumber); // Output: 0 or 1 (randomly)
```
**A random integer between 0 and 100 (e.g., 37)**
```bash
let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber); // Output: A random integer between 0 and 100 (e.g., 37)
```
**A Proper Random Function**
```bash
function getRndInteger(min, max) {
  min = Math.ceil(min);  // Round up the minimum value
  max = Math.floor(max);  // Round down the maximum value
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random integer between 10 and 20 (inclusive)
let randomNumber = getRndInteger(10, 20);

console.log("Random integer between 10 and 20:", randomNumber);
```

#                                                  JAVASCRIPT BOOLEANS

**The Boolean() Function**

You can use the Boolean() function to find out if an expression (or a variable) is true:

```BASH
console.log(Boolean(10 > 9)); // Output: true
```
**Everything With a "Value" is True**

console.log("100 is " + Boolean(100) + "<br>");
console.log("3.14 is " + Boolean(3.14) + "<br>");
console.log("-15 is " + Boolean(-15) + "<br>");
console.log("Any (not empty) string is " + Boolean("Hello") + "<br>");
console.log("Even the string 'false' is " + Boolean('false') + "<br>");
console.log("Any expression (except zero) is " + Boolean(1 + 7 + 3.14));

**Everything Without a "Value" is False**

The Boolean value of 0 (zero) is false:
The Boolean value of -0 (minus zero) is false
The Boolean value of "" (empty string) is false:
The Boolean value of undefined is false:
The Boolean value of null is false:
The Boolean value of false is (you guessed it) false:
The Boolean value of NaN is false:

#                                              JavaScript Comparison and Logical Operators

**Comparison Operators**
**==equal to** 
Given that x = 5, the table below explains the comparison operators:
 ```bash
 let x = 8;
 let y = x == 8;
console.log(y);
```
```bash
 let x = 5;
 let y = x == 5;
 console.lgo(y);
 ```
 ```bash
 let x = '5';
 let y = x == 5;
 console.log(y); 
```
**equal valuea and equal type ===**
 	x === 5	true
  x === '5'	false

**!=	not equal	x != 8**	true	
**!==	not equal value or not equal type	x !== 5**	false	
**x !== "5"	true**	
**x !== 8**	true	
**>	greater than	x > 8**	false	
**<	less than	x < 8**	true	
**>=	greater than or equal to	x >= 8**	false	
**<=	less than or equal to	x <= 8**	true	
  
**Logical Operators**
Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:

**&&	and	(x < 10 && y > 1)** is true	
**||	or	(x == 5 || y == 5)** is false	
**!	not	!(x == y)** is true

**The Nullish Coalescing Operator (??)**
The ?? operator returns the first argument if it is not nullish (null or undefined).

Otherwise it returns the second argument.

**The Optional Chaining Operator (?.)**
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

**Conditional (Ternary) Operator**
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax
variablename = (condition) ? value1:value2
```bash
function myFunction(age) {
  // Handle potential missing age argument (assuming default is 18)
  age = typeof age === 'undefined' ? 18 : age;
  let voteable = (age < 18) ? "Too young" : "Old enough";
  return voteable + " to vote.";
}

// Example usage (assuming you have a way to call the function)
let voteMessage = myFunction(25);
console.log(voteMessage); // Output: "Old enough to vote."
```

#                                                 JavaScript if, else, and else if


Conditional statements are used to perform different actions based on different conditions.

Conditional Statements
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

**The if Statement**
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
```bash
// Get the current hour
let currentHour = new Date().getHours();

// Check the condition using an if statement
if (currentHour < 18) {
  console.log("Good day!"); // Replace with your desired output logic (no console in pure JS)
} else {
  console.log("Good Evening!"); // Optional: Evening message for other times (no console)
}
```
**The else Statement**

Use the else statement to specify a block of code to be executed if the condition is false.

```bash
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Replace this line with your desired output logic (e.g., console.log or store in a variable)
console.log(greeting);
```

**The else if Statement**

Use the else if statement to specify a new condition if the first condition is false.
```bash
// Get the current hour
const time = new Date().getHours();

// Determine the greeting based on the hour
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


console.log(greeting);
```
#                                               javascript switch statement

The switch statement is used to perform different actions based on different conditions.
This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:
```bash
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
console.log("Today is " + day);
```

**The break Keyword**

When JavaScript reaches a break keyword, it breaks out of the switch block.

This will stop the execution inside the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.


#                                                   JAVASCRIPT FOR IN 

**The For In Loop**
The JavaScript for in statement loops through the properties of an Object:

```BASH
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

console.log(txt);
```

**For In Over Arrays**

The JavaScript for in statement can also loop over the properties of an Array:

```bash
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "\n"; 
}

console.log(txt);
```

**Array.forEach()**

The forEach() method calls a function (a callback function) once for each array element.

```BASH
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "\n"; 
}

console.log(txt);
```

#                                                   JAVASCRIPT FOR OF


**The For Of Loop**

The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.

**Looping over an Array**
```bash
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "\n";
}

console.log(text);
```
**Looping over a string**
```bash
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "\n";
}

console.log(text);
```

#                                              Javascript while loop


Loops can execute a block of code as long as a specified condition is true.

```bash
let text = "";
let i = 0;
while (i < 10) {
  text += "\nThe number is " + i;
  i++;
}
console.log(text);
```
**The Do While Loop**

The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
```bash
let text = "";
let i = 0;
do {
  text += "\nThe number is " + i;
  i++;
} while (i < 10);  

console.log(text);
```
#                                                       JavaScript Break and Continue



The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.

**The Break Statement**

You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.

The break statement can also be used to jump out of a loop.

```bash
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "\n";
}

console.log(text);
```

**The Continue Statement**

The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 3:
```bash

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "\n";
}
console.log(text);
```
#                                                         JAVASCRIPT ITERABLES

THE FOR OF LOOP
ITERATING OVER A STRING
ITERATING OVER AN ARRAY 
ITERATING OVER A SET
ITERATING OVER A MAP

#                                                         JAVASCRIPT SETS

A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.

**The new Set() Method**

Pass an array to the new Set() constructor:

```bash
const letters = new Set(["a", "b", "c"]);

console.log("The set has " + letters.size + " values.");
```

**Create a Set and add values:**

const letters = new Set();
```bash
letters.add("a");
letters.add("b");
letters.add("c");


console.log("The set has " + letters.size + " values.");
```
**Listing the Elements**

You can list all Set elements (values) with a for..of loop:
```bash
const letters = new Set(["a", "b", "c"]);

let text = "";
for (const x of letters) {
  text += x + "\n";
}

console.log(text);
```


#                                                       javascript set method


**The new Set() Method**

**The add() Method**

**Listing Set Elements**


**The has() Method**

The has() method returns true if a specified value exists in a set.

```bash
const letters = new Set(["a", "b", "c"]);


const answer = letters.has("d");
console.log("The answer is " + answer);
```

**The forEach() Method**

The forEach() method invokes a function for each Set element:

```bash
const letters = new Set(["a", "b", "c"]);

let text = "";
letters.forEach(function(value) {
  text += value + "\n";
});

console.log(text);
```

**The values() Method**

The values() method returns an Iterator object with the values in a Set:

const letters = new Set(["a", "b", "c"]);

```bash
const myIterator = letters.values();

let text = "";
for (const x of myIterator) {
  text += x + "\n";
}

console.log(text);
```

**The keys() Method**

The keys() method returns an Iterator object with the values in a Set:
```bash
const letters = new Set(["a", "b", "c"]);


const myIterator = letters.keys();


let text = "";
for (const x of myIterator) {
  text += x + "\n";
}

console.log(text);
```

**The entries() Method**

The entries() method returns an Iterator with [value,value] pairs from a Set.
```bash
const letters = new Set(["a", "b", "c"]);

const myIterator = letters.entries();

let text = "";
for (const entry of myIterator) {
  text += entry + "\n";
}

console.log(text);
```