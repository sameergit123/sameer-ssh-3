
/*Alpabetic Sort
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
Home made Max()*/


/*ALPHABETIC SORT

**ARRAY SORT()**

The sort() method sorts an array alphabetically.*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.sort()
console.log(fruit)


/***Reversing an Array**

The reverse() method reverses the elements in an array:*/


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits.reverse();
console.log(fruit1)

/***Numeric sort***/


const points = [40, 100, 1, 5, 25, 10]; 

asscendigOrder = points.sort(function(a, b){return a - b});
console.log(points)



/***Using Math.min() on an Array**

You can use Math.min.apply to find the lowest number in an array:*/



const points2 = [40, 100, 1, 5, 25, 10];
const smallestNumber = myArrayMin(points);
console.log(smallestNumber);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}


/***Using Math.max() on an Array**

You can use Math.max.apply to find the highest number in an array:*/


const points1 = [40, 100, 1, 5, 25, 10];
const largestNumber = myArrayMax(points);
console.log(largestNumber);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}