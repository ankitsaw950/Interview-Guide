/*

## SET In JavaScript 

-> It is a collection of unique values 
-> It does not allow duplicate values to be stored again
-> It store values of any type 

// Creating a Set
let mySet = new Set();  // Creates an empty set
let numbersSet = new Set([1, 2, 3, 4]);  // Creates a set with initial values

-----------------------------------------------------
// Adding elements to a set

-> We add elements by the add() method
let mySet = new Set();
mySet.add(1);  // Adds 1 to the set
mySet.add(2);  // Adds 2 to the set
mySet.add(3);  // Adds 3 to the set

Note: If we try to add duplicate value then it ignores the value, dont give error

mySet.add(2);  // No effect, because 2 already exists in the set
console.log(mySet);  // Set { 1, 2, 3 }

---------------------------------------------------------
// Checking the existence of element

-> We check by using the has() method

let mySet = new Set([1, 2, 3]);
console.log(mySet.has(2));  // true
console.log(mySet.has(4));  // false
-----------------------------------------------

// Removing elements from the set

-> We use the delete method to particulary delete that element from the set

let mySet = new Set([1, 2, 3]);
mySet.delete(2);  // Removes 2 from the set
console.log(mySet);  // Set { 1, 3 }

-------

-> We can also remove all the element by once by using the clear() method.

let mySet = new Set([1, 2, 3]);
mySet.clear();  // Removes all elements from the set
console.log(mySet);  // Set {}


--------------------------------------------

// Size of set

-> we check the size of set by the size property
let mySet = new Set([1, 2, 3]);
console.log(mySet.size);  // 3
-------------------------------------------------
Q. Difference between the property and a method ?
----------------------------------------------------

-------------------------------------------------------
// Iterating over a set

- for...of loop
- forEach() method
- using iterator

----------
// Using for...of loop

let myset = new Set([1,2,3,4,5]);
for(let value of myset){
console.log(value);
}

---------
// Using forEach() method

myset.Each(value =>{
    console.log(value)
})

-----------------------------------
// How to Convert the Set into an array

-> This done by the array method Array.from() mthod or the spread operator

let myset = new Set([1,2,3,4]);
let myArray = Array.from(myset);
console.log(myArray);  // [1,2,3,4]

let myarr = [...myset]
console.log(myarr); // [1,2,3,4]


---------------------------------------------------

// Difference between Array and Set

----------------------------------------------------------------------------------------------
| Feature               | Array                          | Set                             |
|-----------------------|--------------------------------|---------------------------------|
| Duplicates            | Allows duplicates              | Does not allow duplicates       |
| Order                 | Maintains insertion order      | Maintains insertion order       |
| Access                | Access via index               | No index-based access           |
| Methods               | Many built-in methods          | Limited built-in methods        |
| Performance           | Faster for indexed operations  | Faster for unique value checks  |
| Use Case              | General-purpose data structure | Unique value collection         |
-------------------------------------------------------------------------------------------


--------------------------------------------
// Now Can u explain the inner working of methods of set and how they are implemented

class CustomSet {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  clear() {
    this.items = {};
  }

  forEach(callbackFn, thisArg) {
    for (let value in this.items) {
      if (this.items.hasOwnProperty(value)) {
        callbackFn.call(thisArg, this.items[value], this.items[value], this);
      }
    }
  }
}

// Example usage:
const set = new CustomSet();
set.add(1);
set.add(2);
console.log(set.has(1)); // true
set.forEach(value => console.log(value)); // 1, 2
set.delete(1);
console.log(set.has(1)); // false
set.clear();
console.log(set.has(2)); // false
-------------------------------------------------------------------------



















*/