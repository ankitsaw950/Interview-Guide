1. Symbol: Ek unique identifier create karne ke liye use hota hai. Example: `const mySym = Symbol("key1")`

2. Object: JavaScript me ek collection of properties hota hai. Example: 
   ```
   const JsUser = {
       name: "John Doe",
       age: 30,
       email: "john@doe",
       location: "Suriya",
       loggedInDays: ["Monday", "Saturday", "Sunday"],
   }
   ```

3. Object.freeze: Is method se object ko freeze kiya ja sakta hai jisse object me koi nayi property add ya modify nahi ki ja sakti. Example: `Object.freeze(JsUser)`

4. Property Access: Object properties ko dot notation (`JsUser.name`) ya bracket notation (`JsUser["age"]`) se access kiya ja sakta hai.

5. Method: Object ke andar function ko method kehte hain. Example: 
   ```
   JsUser.greeting = function() {
       console.log("Hello ankit");
   }
   ```

6. typeof: Yeh operator kisi variable ya expression ka type return karta hai. Example: `console.log(typeof greeting)`

7. Internally, JavaScript keys are stored as strings. Therefore, accessing `JsUser[age]` will result in an error because `age` is not a string. Use `JsUser["age"]` instead.




## Hoisting 

Let's break down your code and analyze it step by step, focusing on **hoisting** and **objects** in JavaScript.

### **Code Analysis**
```javascript
console.log(tinderUser); // ?
const tinderUser = {};
const tinder = new Object();
console.log(tinderUser); // ?
console.log(tinder); // ?
```

---


1. **What is Hoisting?**
   Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. However, **how variables are hoisted depends on how they are declared**:
   - **`var`**: Hoisted and initialized as `undefined`.
   - **`let` and `const`**: Hoisted, but not initialized (in the **Temporal Dead Zone (TDZ)** until the declaration is executed).
   - **Functions**: Fully hoisted, meaning you can call them before their declaration.

2. **Objects Are Not Special**
   - Objects in JavaScript behave like any other variable.
   - Their hoisting depends on how the variable is declared.

---

### **Code Execution Flow**
#### Line-by-Line Behavior
1. **`console.log(tinderUser);`**
   - **`tinderUser` is declared with `const`.**
   - `const` variables are hoisted but are in the **TDZ** (Temporal Dead Zone). You cannot access them before their declaration.
   - Accessing `tinderUser` here throws a **`ReferenceError`**.

2. **`const tinderUser = {};`**
   - This creates the `tinderUser` object and initializes it with an empty object.

3. **`const tinder = new Object();`**
   - This creates another object, `tinder`, using the `Object` constructor.

4. **`console.log(tinderUser);`**
   - By now, `tinderUser` has been initialized, so it logs `{}` (an empty object).

5. **`console.log(tinder);`**
   - By now, `tinder` has also been initialized, so it logs `{}` (an empty object).

---

### **Corrected Execution with Errors**
```javascript
console.log(tinderUser); // ReferenceError: Cannot access 'tinderUser' before initialization
const tinderUser = {};   // Declares and initializes tinderUser
const tinder = new Object(); // Declares and initializes tinder
console.log(tinderUser); // {}
console.log(tinder);     // {}
```

---

### **Key Points**
- Objects themselves are **not hoisted** differently; they are just variables. The hoisting behavior depends on how the variable is declared.
- **`const` and `let` variables are not accessible before their declaration** due to the Temporal Dead Zone (TDZ).
- **`var`** variables would behave differently. If you use `var` instead of `const` in your example:

```javascript
console.log(tinderUser); // undefined (because `var` is hoisted and initialized to `undefined`)
var tinderUser = {};
var tinder = new Object();
console.log(tinderUser); // {}
console.log(tinder);     // {}
```

---

### **Takeaways**
- **Objects don't have special hoisting behavior.** Their behavior depends on whether they are declared with `var`, `let`, or `const`.
- **Always declare variables before using them** to avoid issues with hoisting or the Temporal Dead Zone.



Let's analyze this code step by step to understand its behavior:

```javascript
console.log(a);
a: {
    apple: "fruit";
}

console.log(a);
```

---

### **1. Key Concepts**
- **Labels in JavaScript**:  
  The `a:` syntax in your code creates a **label** rather than an object. Labels are used with loops or `switch` statements to mark blocks of code for reference. This is **not** an object assignment.

- **Hoisting**:  
  The variable `a` is not declared with `var`, `let`, or `const`. Accessing an undeclared variable directly results in a **`ReferenceError`**.

---

### **Code Execution Flow**
#### **Line 1: `console.log(a);`**
- `a` is not declared yet.
- JavaScript will throw a **`ReferenceError: a is not defined`** because `a` is not a variable or object.

---

#### **Line 2: `a: { apple: "fruit"; }`**
- The `a:` syntax is treated as a **label**, not a variable or object assignment.
- The code block `{ apple: "fruit"; }` is valid but does nothing because it is not part of any loop or control flow.

---

#### **Line 4: `console.log(a);`**
- Again, `a` is still not defined as a variable or object.
- JavaScript will throw **`ReferenceError: a is not defined`**.

---

### **Correcting the Code**
If you want to use `a` as an object, you need to define it explicitly with `var`, `let`, or `const`. For example:

```javascript
const a = {
    apple: "fruit"
};

console.log(a); // { apple: "fruit" }
console.log(a.apple); // "fruit"
```

---

### **Takeaway**
- The `a:` syntax is interpreted as a **label** in JavaScript, not as an object declaration.
- Always declare variables explicitly before using them to avoid errors.
- If you want `a` to be an object, declare it with `const`, `let`, or `var`.


### **Labels in JavaScript** (Short Notes)

1. **Definition**:  
   Labels are identifiers used to name a block of code or loop for controlling execution with `break` or `continue`.

2. **Syntax**:  
   ```javascript
   labelName: statement
   ```

3. **Use Cases**:  
   - **Exit a specific loop**:  
     ```javascript
     outerLoop: for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
             if (i === 1 && j === 1) break outerLoop; // Exits outer loop
         }
     }
     ```
   - **Skip iterations in a loop**:  
     ```javascript
     outerLoop: for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
             if (i === 1 && j === 1) continue outerLoop; // Skips to outer loop's next iteration
         }
     }
     ```

4. **Key Points**:  
   - Labels are **not variables**.
   - Avoid overuse; they can make code harder to read.  
   - Primarily used with **nested loops**.



You're not getting a "not declared" reference error in your code because **JavaScript distinguishes between accessing undefined properties and accessing variables that are not declared at all**.

---

### **Key Difference:**

1. **Accessing Undefined Properties**:  
   When you try to access a property that **exists in the object but is not defined**, JavaScript will return `undefined`. This is not an error; it just means the property doesn't exist at that level in the object hierarchy.

   Example:
   ```javascript
   const user = {
       email: "ankit@ankit.com",
       fullname: {
           userFullName: {
               firstName: "Ankit",
               lastName: "Saw"
           }
       }
   };

   console.log(user.userFullName); // undefined (userFullName is not at the top level)
   console.log(user.firstName);    // undefined (firstName is not at the top level)
   ```

   Here, `user.userFullName` and `user.firstName` are valid expressions. JavaScript looks for these properties on the `user` object. Since they are not present, it returns `undefined` instead of throwing an error.

---

2. **Accessing Undeclared Variables**:  
   If you try to access a variable that hasn't been declared (not even defined with `let`, `const`, or `var`), JavaScript will throw a **ReferenceError**.

   Example:
   ```javascript
   console.log(myVariable); // ReferenceError: myVariable is not defined
   ```

   Here, `myVariable` is not declared anywhere in the code, so JavaScript cannot reference it and throws an error.

---

### **Why You Don’t Get an Error Here**
In your case:
```javascript
const user = {
    email: "ankit@ankit.com",
    fullname: {
        userFullName: {
            firstName: "Ankit",
            lastName: "Saw"
        }
    }
};

console.log(user.fullname);        // Valid: fullname exists.
console.log(user.userFullName);    // Undefined: userFullName is not a direct property of user.
console.log(user.firstName);       // Undefined: firstName is not a direct property of user.
```

- **`user.fullname`**: Exists in the object, so you get the value.  
- **`user.userFullName`**: JavaScript checks if `user` has a property `userFullName`. It doesn't, so you get `undefined`.  
- **`user.firstName`**: JavaScript checks if `user` has a property `firstName`. It doesn't, so you get `undefined`.

---

### **When You’d Get a ReferenceError**
You’ll only get a `ReferenceError` if you try to access a variable that isn’t declared at all, like this:

```javascript
console.log(someVariable); // ReferenceError: someVariable is not defined
```

But accessing properties on an object (even if they don’t exist) does **not** cause a `ReferenceError`. Instead, it returns `undefined`.

---

### **Key Takeaways:**
- Accessing undefined properties of an object returns `undefined`.
- Accessing undeclared variables throws a `ReferenceError`.
- Always ensure you're accessing the right level of the object hierarchy. Optional chaining (`?.`) can help prevent such issues. For example:
  ```javascript
  console.log(user?.fullname?.userFullName?.firstName); // "Ankit"
  console.log(user?.userFullName); // Output: undefined

  ```

---

### 1. **What are Objects in JavaScript?**
- Objects are collections of **key-value pairs**.
- Keys (properties) are strings (or Symbols), and values can be **any data type** (numbers, strings, arrays, functions, or even other objects).
- Objects are the most important data type in JavaScript, forming the foundation of JavaScript programming.

---

### 2. **How to Create Objects**
#### a) **Object Literal Syntax** (Simplest Method)
```javascript
const person = {
  name: "Ankit",
  age: 22,
  isStudent: true
};
console.log(person.name); // Output: "Ankit"
```

#### b) **Using `new Object()`**
```javascript
const car = new Object();
car.brand = "Tesla";
car.model = "Model S";
console.log(car.brand); // Output: "Tesla"
```

---

### 3. **Accessing Object Properties**
#### a) **Dot Notation**
```javascript
console.log(person.name); // "Ankit"
```

#### b) **Bracket Notation** (Useful for dynamic keys)
```javascript
console.log(person["name"]); // "Ankit"

const key = "age";
console.log(person[key]); // 22
```

---

### 4. **Adding and Modifying Properties**
```javascript
person.country = "India"; // Adds a new property
person.age = 23;          // Updates the value of an existing property
console.log(person);
```

---

### 5. **Deleting Properties**
```javascript
delete person.isStudent;
console.log(person); // `isStudent` property will be removed
```

---

### 6. **Nested Objects**
Objects can contain other objects:
```javascript
const user = {
  name: "Ankit",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};
console.log(user.address.city); // Output: "Delhi"
```

---

### 7. **Methods in Objects**
- Functions stored as object properties are called **methods**.
```javascript
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b; // Shortcut syntax
  }
};
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
```

---

### 8. **Looping Through an Object**
#### Using `for...in`
```javascript
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

---

### 9. **Object Methods**
#### a) **`Object.keys()`**
Returns an array of keys.
```javascript
console.log(Object.keys(person)); // ["name", "age", "country"]
```

#### b) **`Object.values()`**
Returns an array of values.
```javascript
console.log(Object.values(person)); // ["Ankit", 23, "India"]
```

#### c) **`Object.entries()`**
Returns an array of key-value pairs.
```javascript
console.log(Object.entries(person)); 
// [["name", "Ankit"], ["age", 23], ["country", "India"]]
```

#### d) **`Object.assign()`**
Copies properties from one object to another.
```javascript
const extraInfo = { hobby: "coding" };
const updatedPerson = Object.assign(person, extraInfo);
console.log(updatedPerson);
```

---

### 10. **Checking for Properties**
#### a) Using `in` Operator
```javascript
console.log("age" in person); // true
```

#### b) Using `hasOwnProperty()`
```javascript
console.log(person.hasOwnProperty("name")); // true
```

---

### 11. **Copying Objects**
#### a) **Shallow Copy**
Using Spread Syntax:
```javascript
const personCopy = { ...person };
```

#### b) **Deep Copy**
Using `JSON` methods:
```javascript
const deepCopy = JSON.parse(JSON.stringify(person));
```

---

### 12. **Dynamic Properties**
You can create properties dynamically:
```javascript
const key = "email";
const userDetails = {
  [key]: "ankit@example.com"
};
console.log(userDetails.email); // "ankit@example.com"
```

---

### **Shallow Copy vs Deep Copy**

When working with objects or arrays in JavaScript, **shallow copy** and **deep copy** determine how data is duplicated. Let’s break it down:

---

### **Shallow Copy**
- A **shallow copy** creates a new object or array, but **copies only the top-level properties**.
- If the object or array has nested objects or arrays, the **references** to those nested structures are copied, not the actual values.
- Changes to the nested objects in the copied structure **affect the original object**, because both share the same reference.

#### **Examples of Shallow Copy**:
1. **Using the Spread Operator (`...`)**:
   ```javascript
   const original = {
       name: "Ankit",
       address: {
           city: "Delhi",
           pin: 110001
       }
   };

   const shallowCopy = { ...original };
   shallowCopy.address.city = "Mumbai";

   console.log(original.address.city); // "Mumbai" (original is affected)
   ```

2. **Using `Object.assign()`**:
   ```javascript
   const shallowCopy = Object.assign({}, original);
   shallowCopy.address.city = "Mumbai";

   console.log(original.address.city); // "Mumbai" (original is affected)
   ```

---

### **Deep Copy**
- A **deep copy** creates a completely independent copy of the original object or array, including all nested structures.
- Changes to the copied structure do **not affect the original object**, because nested objects are also cloned, not just their references.

#### **Examples of Deep Copy**:
1. **Using `JSON.parse(JSON.stringify())`**:
   ```javascript
   const original = {
       name: "Ankit",
       address: {
           city: "Delhi",
           pin: 110001
       }
   };

   const deepCopy = JSON.parse(JSON.stringify(original));
   deepCopy.address.city = "Mumbai";

   console.log(original.address.city); // "Delhi" (original is unaffected)
   ```




### **When to Use**
1. **Shallow Copy**:
   - When working with simple objects or arrays that do not have nested structures.
   - When you don't need to avoid mutating nested data.

2. **Deep Copy**:
   - When the object or array has nested structures, and you want to prevent unintentional side effects (like changes to one affecting the other).

---

Here's a note on **shallow copy** for your code:

---

### **Shallow Copy Explanation**
- When you create a shallow copy using the **spread operator (`...`)**, only the **first level of the object** is copied. Deeper levels retain references to the original object's nested structures.
- In the given code:
  ```javascript
  const userCopy = { ...user };
  ```
  This creates a shallow copy of the `user` object. However:
  - The `fullname` object within `user` is **not deeply copied**. Instead, `userCopy.fullname` still references the same object as `user.fullname`.

### **Key Observations**
1. **Mutating Nested Properties**:
   - When `userCopy.fullname.userFullName.firstName` is updated to `"Krishna"`, it also affects the `user` object because both `user.fullname` and `userCopy.fullname` point to the same reference.

   Output:
   ```javascript
   console.log(userCopy); // Reflects the change
   console.log(user);     // Also reflects the change
   ```

2. **Mutating Top-Level Properties**:
   - When `user.email` is updated to `"krishna@ankit.com"`, it does **not** affect `userCopy.email` because the top-level property was directly copied.

   Output:
   ```javascript
   console.log(userCopy.email); // Remains "ankit@ankit.com"
   console.log(user.email);     // Updated to "krishna@ankit.com"
   ```

---

### **Key Takeaway**:
- A **shallow copy** duplicates only the top-level properties, and nested objects retain their references.
- To avoid this behavior and create a true **deep copy**, use methods like `JSON.parse(JSON.stringify(object))` or libraries like `lodash` (`_.cloneDeep`).


#### For Deep copy
```javascript

const user = {
    email :"ankit@ankit.com",
    fullname:{
        userFullName :{
            firstName : "Ankit",
            lastName : "Saw"
        }
    }
}

const deep = JSON.parse(user)
console.log(deep)  

```
It looks like you're trying to create a deep copy of the `user` object, but there is a mistake in your code. The method you're using, `JSON.parse(user)`, will not work as expected because `JSON.parse()` requires a string as an argument, not an object.

Here's the corrected code:


```javascript
const user = {
    email: "ankit@ankit.com",
    fullname: {
        userFullName: {
            firstName: "Ankit",
            lastName: "Saw"
        }
    }
};

// Correct way to create a deep copy
const deep = JSON.parse(JSON.stringify(user));

console.log(deep);
```

### Explanation:
- `JSON.stringify(user)` converts the `user` object into a JSON string.
- `JSON.parse()` then parses that string and creates a new object, which is a deep copy of the original `user` object.

Now, the `deep` object will be a new instance, and any nested objects or arrays will also be deep copies, meaning they won't be referencing the original `user` object.