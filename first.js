const points = [40, 100, 1, 5, 25, 10];
const smallestNumber = myArrayMin(points);
console.log(smallestNumber);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
