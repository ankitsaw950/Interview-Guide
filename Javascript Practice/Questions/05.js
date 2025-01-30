// Write a function that takes a string and returns the reversed version of it

 let str = "Ankit Saw";

 function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(str));