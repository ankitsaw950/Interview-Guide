// Write a function that takes an array of numbers and returns a new array with only the even numbers.

let arr = [2,1,4,5,6,7,8,9,10];

function filterEvenNumber(arr) {
    return arr.filter(num =>{
     return   num%2===0
});
}

console.log(filterEvenNumber(arr));