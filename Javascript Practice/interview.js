
// let a ;
// console.log(a); // reference error  
// let a = 10;  
// function test() {
//   var b;  
//   console.log(b);  
//   var b = 20;  
// }  
// test();


// function abc(){
//   var b; //declaration 
//   var b = 20;
//   console.log(b); //20 



// }

// console.log(abc()); // undefined

// console.log(b); // Reference error


// console.log(x)

///---------------------------


// // var x;
// if(true){
//     let x;
//      x = 5;
//     console.log(x); // 5 
// }

// console.log(x) // 5



// temperal dead zone 


// console.log(a) // reference error

// let a = 5;
// console.log(a) //5

/*
let a;
console.log(a)  // reference error 
console.log(a)  // reference error
console.log(a)  // reference error
console.log(a)  // reference error
console.log(a)  // reference error
a=5;
console.log(a)


*/


// function abc(){
//     let a = 0;
//     return a

//     function xyz(){
//         a++
//     }
//     xyz();
// }

// abc()
// abc()
// abc()
// abc()
// console.log(abc())  // 5


// closure

// function abc(){
//     var a=0;
//     function c(){
//     }
    

//     return function xyz(){
//         a++
//         // console.log(a)
//         return a
//     }

// }

// let a = abc(); // 
// a()
// a()
// a()
// a()
// a()
// console.log(a() )// 6


// function curring 
// Advance version of closure 
function xyz(a){
    return function(b){
        return a+b;
      }
}
console.log(xyz(10)(20))

