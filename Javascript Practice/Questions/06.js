// Write a function to check even or odd

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

console.log(checkEvenOrOdd(8));