// Print the numbers from 1 to 5 to the console using a loop
console.log("-----------------------------------------------");
console.log("             Using While loop              ");
console.log("-----------------------------------------------");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

console.log("-----------------------------------------------");
console.log("                 Using For loop            ");
console.log("-----------------------------------------------");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("-----------------------------------------------");
console.log("              Using do-while loop           ");
console.log("-----------------------------------------------");

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

console.log("-----------------------------------------------");
console.log("              Using for-of loop              ");
console.log("-----------------------------------------------");

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

console.log("-----------------------------------------------");
console.log("           Using forEach method                 ");
console.log("-----------------------------------------------");
numbers.forEach((number) => {
  console.log(number);
});