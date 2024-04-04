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




