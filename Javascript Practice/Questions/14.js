// Write a function that calculates the factorial of a given number.


// factorial of 1 =1
// factorial of 0 =1
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Factorial of the given number is " + factorial(5));

// 5 = 5*4*3*2*1