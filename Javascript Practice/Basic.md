## `Hoisting Concept`


 `var`, `let`, and `const` based on various characteristics:

| **Feature**                   | **`var`**                            | **`let`**                                       | **`const`**                                     |
| ----------------------------- | ------------------------------------ | ----------------------------------------------- | ----------------------------------------------- |
| **Scope**                     | **Function Scope**                   | **Block Scope**                                 | **Block Scope**                                 |
| **Hoisting**                  | Hoisted (initialized to `undefined`) | Hoisted (but uninitialized)                     | Hoisted (but uninitialized)                     |
| **Hoisting Value**            | `undefined`                          | `ReferenceError` if accessed before declaration | `ReferenceError` if accessed before declaration |
| **Redeclaration**             | **Allowed**                          | **Not Allowed**                                 | **Not Allowed**                                 |
| **Reassignment of Value**     | **Allowed**                          | **Allowed**                                     | **Not Allowed** (for primitive values)          |
| **Initialization with Value** | **Optional**                         | **Optional**                                    | **Mandatory**                                   |

---

### **Explanation**:

1. **Scope**:

   - `var` is scoped to the function where it is declared (function scope).
   - `let` and `const` are scoped to the block (e.g., inside `{}`).

2. **Hoisting**:

   - **`var`** is hoisted, which means it is moved to the top of its scope during execution, and is initialized with `undefined`.
   - **`let`** and **`const`** are hoisted as well but are not initialized, leading to a `ReferenceError` if accessed before they are declared.

3. **Redeclaration**:

   - **`var`** allows redeclaring the same variable multiple times within the same scope.
   - **`let`** and **`const`** do not allow redeclaration within the same scope, which helps prevent accidental overwrites.

4. **Reassignment of Value**:

   - **`var`** allows reassignment of values at any point.
   - **`let`** allows reassignment of values.
   - **`const`** does **not** allow reassignment, meaning the value cannot be changed after initialization (though objects and arrays declared with `const` can have their contents modified).

5. **Initialization with Value**:
   - **`var`** can be declared without initializing a value.
   - **`let`** can be declared without initializing a value.
   - **`const`** must always be initialized with a value at the time of declaration.

---

#### `var` Ka Hoisting kese Hota hai 

``` javascript

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

`Internally javascript me`

var x; // Declaration hoisted
console.log(x); // Output: undefined
x = 5; // Assignment happens later
console.log(x); // Output: 5
  

```

#### `let` Ka Hoisting kese Hota hai 

``` javascript

console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10


`Internally javascript me`

// Internally, this is what happens:
let y; // Declaration hoisted, but not initialized
console.log(y); // ReferenceError: Cannot access 'y' before initialization
y = 10; // Assignment happens later
console.log(y); // Output: 10

  

```

#### `const` Ka Hoisting kese Hota hai 

``` javascript

console.log(z); // Output: ReferenceError: Cannot access 'z' before initialization
const z = 20;
console.log(z); // Output: 20


`Internally javascript me`

// Internally, this is what happens:
const z; // Declaration hoisted, but not initialized
console.log(z); // ReferenceError: Cannot access 'z' before initialization
z = 20; // Assignment happens later
console.log(z); // Output: 20

  

```


### **Key Points & Examples for Logging Methods in JavaScript**

---

### 1. **`console.log()`**

**Key Points:**
- General purpose logging method.
- Used for debugging and displaying values.
- No special visual cue, just prints output to the console.

**Example:**
```javascript
let name = "Ankit";
console.log("My name is " + name); // Output: My name is Ankit
```

---

### 2. **`console.info()`**

**Key Points:**
- Used to display **informational** messages.
- Displays the message in **blue** color in the console.
- Generally used for conveying information or status updates.

**Example:**
```javascript
console.info("This is an informational message."); 
// Output: This is an informational message. (Blue color in console)
```

---

### 3. **`console.warn()`**

**Key Points:**
- Used to display **warning** messages.
- Displays the message in **yellow** color to catch attention.
- Indicates potential issues but not errors that would stop code execution.

**Example:**
```javascript
console.warn("This is a warning message!"); 
// Output: This is a warning message! (Yellow color in console)
```

---

### 4. **`prompt()`**

**Key Points:**
- Displays a **pop-up dialog box** to ask the user for input.
- Returns the input value as a string, or `null` if the user cancels.
- Useful for collecting simple data from users.

**Example:**
```javascript
let userName = prompt("Please enter your name: ");
console.log("Hello, " + userName); 
// Output: If user enters "Ankit", it shows "Hello, Ankit"
```

---

### 5. **`alert()`**

**Key Points:**
- Displays a **pop-up message** with a notification to the user.
- Stops code execution until the user clicks "OK".
- Typically used to display important messages or alerts.

**Example:**
```javascript
alert("This is an important message!");
// Output: A pop-up alert box with the message "This is an important message!"
```

---

### **Summary Table**

| Method             | Purpose                                        | Example Output                         | Notes                                      |
|--------------------|------------------------------------------------|----------------------------------------|--------------------------------------------|
| **`console.log()`** | General purpose logging                       | `My name is Ankit`                     | Used for debugging, displaying values.     |
| **`console.info()`**| Displays informational messages                | `This is an informational message.`    | Blue color, used for status updates/info.  |
| **`console.warn()`**| Displays warning messages                     | `This is a warning message!`           | Yellow color, indicates potential issues. |
| **`prompt()`**      | Gets input from the user                       | Input box for text                     | Returns input or `null` (if cancelled).    |
| **`alert()`**       | Displays pop-up message to the user            | Alert box with message                 | Stops execution until "OK" is clicked.     |

---

In methods ka use karke aap easily apne JavaScript code ko debug kar sakte hain, user se input le sakte hain, aur important messages show kar sakte hain. Agar aapko koi specific example ya concept samajhna ho toh puchna! 😊





### **JavaScript Execution: Two Phases**
JavaScript executes code in **two phases**:
1. **Compilation Phase (Hoisting Occurs)**
2. **Execution Phase (Code Runs Line by Line)**

---

### **1. Compilation Phase**
Before running the code, JavaScript first **compiles** it. In this phase:
✅ **Hoisting Happens**:
   - **Function declarations** are fully hoisted.
   - **Variables declared with `var` are hoisted but initialized as `undefined`.**
   - **Variables declared with `let` and `const` are hoisted but kept in the Temporal Dead Zone (TDZ).**
  
✅ **Scope Creation**:
   - JavaScript creates **Global Execution Context (GEC)** for the script.
   - If inside a function, it creates a **Function Execution Context (FEC)**.

✅ **Memory Allocation**:
   - JS reserves memory for variables and functions.

---

### **2. Execution Phase**
Once the compilation phase is complete:
- The JavaScript engine **executes the code line by line**.
- Values are **assigned** to variables.
- Functions are executed when they are called.

---

## **Example 1: Hoisting with `var` and Function Declarations**
```javascript
console.log(a); // ✅ `undefined` (Hoisted but not initialized)
var a = 10;
console.log(a); // ✅ `10`

console.log(add(2, 3)); // ✅ `5` (Function is fully hoisted)
function add(x, y) {
    return x + y;
}
```
### **What Happens Internally?**
#### **During Compilation Phase**:
- `var a` is **hoisted** and assigned `undefined`.
- `add()` function is **fully hoisted**.

#### **During Execution Phase**:
- `console.log(a);` prints `undefined` because `a` is hoisted but not initialized yet.
- `a = 10;` assigns the value `10` to `a`.
- `console.log(a);` prints `10`.
- `console.log(add(2, 3));` works because `add()` is fully hoisted.

---

## **Example 2: Hoisting with `let` and `const`**
```javascript
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ `20`
```
### **Why the Error?**
- `let` variables **are hoisted**, but they remain in the **Temporal Dead Zone (TDZ)** until their declaration.
- Accessing `b` before initialization results in a **ReferenceError**.

---





## `STRINGS`

### **Summary of Key String Methods**

| Method          | Description                                                    | Example                                                                 |
|-----------------|----------------------------------------------------------------|-------------------------------------------------------------------------|
| `toUpperCase()`  | Converts string to uppercase.                                  | `"hello".toUpperCase()` → `"HELLO"`                                      |
| `toLowerCase()`  | Converts string to lowercase.                                  | `"HELLO".toLowerCase()` → `"hello"`                                      |
| `charAt()`       | Returns the character at a specified index.                    | `"Hello".charAt(1)` → `"e"`                                              |
| `concat()`       | Combines two or more strings.                                  | `"Hello".concat(" World")` → `"Hello World"`                            |
| `includes()`     | Checks if a string contains a specific substring.              | `"I love JavaScript".includes("love")` → `true`                         |
| `indexOf()`      | Returns the index of the first occurrence of a substring.      | `"I love JavaScript".indexOf("love")` → `2`                             |
| `replace()`      | Replaces a specified substring with another substring.         | `"Hello, World!".replace("World", "Ankit")` → `"Hello, Ankit!"`         |
| `split()`        | Splits a string into an array of substrings.                   | `"apple,banana".split(",")` → `["apple", "banana"]`                     |
| `slice()`        | Extracts a section of a string.                                | `"Hello".slice(0, 5)` → `"Hello"`                                        |
| `substring()`    | Similar to `slice()`, but does not allow negative indices.     | `"Hello".substring(0, 5)` → `"Hello"`                                    |
| `trim()`         | Removes whitespace from both ends of a string.                 | `"  Hello ".trim()` → `"Hello"`                                          |
| `repeat()`       | Returns a new string repeated a specified number of times.     | `"Hello".repeat(3)` → `"HelloHelloHello"`                               |
| `startsWith()`   | Checks if the string starts with a given substring.            | `"I love JavaScript".startsWith("I love")` → `true`                     |
| `endsWith()`     | Checks if the string ends with a given substring.              | `"I love JavaScript".endsWith("JavaScript")` → `true`                   |

---


#### `Autoboxing`

    JavaScript me autoboxing ka concept primitive values ko objects me convert karne ka hai jab unpe methods call kiye jaate hain. Iska use JavaScript ke flexible nature ko dikhata hai, jahan aapko primitive types aur objects ke beech conversion manually karne ki zarurat nahi hoti.