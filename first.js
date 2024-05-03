const hour = new Date().getHours();
let greeting;

if (hour > 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Replace this line with your desired output logic (e.g., console.log or store in a variable)
console.log(greeting);