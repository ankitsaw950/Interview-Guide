

// String

// => A sequence of characters enclosed within single quotes(' ') , double quotes(" ") ,or backticks(` `).

// => String are primitive type , Js automatically wraps them in a String Object when a method or property is accessed => this process is called "Autoboxing".

// Strins are immutable.
// Any operation that appears to modify a string actually creates a new String rather than modifying the original one.


// Q. Property vs Method

// property =>  It is a value associated with an object.
// method => It is a function associated with an object.


// let car = {
//     brand: "Toyota",       // Property
//     startEngine: function() {   // Method
//       console.log("Engine started!");
//     },
//     stopEngine: function() {    // Method
//       console.log("Engine stopped!");
//     }
//   };
  
//   car.startEngine(); // Calling the method -> Output: "Engine started!"
//   car.stopEngine();  // Calling the method -> Output: "Engine stopped!"
  

//-------------------------------------------------------
// String Primitives

// Primitve String a ek primitve data type hai jo directly value ko hold karta hai

// Primitive string ko "", '', ya `` (backticks) ke andar likhte hain.

// Primitve String lightweight hote hai
//-------------------------------------------------

// String objects

// String objects ko explicitly create kiya jata hai using new String() constructor.
// Ye ek object hota hai, jo primitive string ko wrap karta hai.
// Inka typeof value "object" hota hai.

//  String Interning ka matlab hai: Agar primitive strings same value share karte hain, to unhe ek hi memory location pe store kiya jata hai.

// String Objects ke saath yeh optimization nahi hoti. Har object ke liye nayi memory allocate hoti hai.


// ---------------------------------------
// Template literal
// String Objects

// String.prototype
// Method -> charAt(),toUpperCase(),toLowerCase(),toString(),split(),length,constructor

// at(), charAt(),charCodeAt(),codePointAt(),concat(),endswith(),includes(),indexOf(),isWellFormed(),lastIndexOf(),match(),natchAll(),padEnd(),padStart(),repeat(),replace(),replaceAll(),search(),slice(),split(),startsWith(),substr(),substring(),trim(),trimEnd(),trimStart(),valueOf(),


// -----------------------------------------------

// // Q.1 
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1 + " " + str2) ; // Hello World

// // Q.2
// let str = "JavaScript";
// console.log(str.length); // 10

// //Q3
// let str = "JavaScript";
// console.log(str.substring(0, 4)); // Java
// console.log(str.slice(-6));

let str = "Hello";
str[0] = "Y";
console.log(str);







