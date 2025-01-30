// function add( num1 , num2 ) {

    
//     // console.log(typeof num1,  typeof num2 ); // undefined undefined
//     // console.log( num1 + num2 ) 
//     // console.log(typeof ( num1 + num2) ) 

//     // console.log( num1 + num2 )
  

// }

// add() // NaN  ,, in this case if i print the value of num1 and num2 inside the function then it will print undefined and undefined

// add(1,2) // 3

// add("1",2) // in this case the num1 is string and num2 is number , while computing the additional value the num2 is being treated as string and the string concatenation takes place and in combine it results to the string

// add(1,"5")


// let a = c
// add(1,a)
// add(b,3)

// add(a,b)

// add("a","bb")

// add(5,4)
// add()
// console.log(add())




// function add(a,b){

// }
// console.log(add(4,2)) // undefined


// function add(a,b){
//     return
// }
// console.log(add(4,5)) // undefined



// default parameters
function login(username="ankit"){
    if(!username){
        console.log("Username is required")
        return 
    }

    return `${username} just logged in `
}

// console.log(login()) 
// console.log(login("ankit123")) 

// console.log(login(" ")) // Username is required
// console.log(login("")) // Username is required
// console.log(login(null)) 
// console.log(login(0)) 
// console.log(login(undefined)) 



//Function hoisting

// console.log(add(1,4)) 
// function add(a , b){
//     return a + b
// }

// console.log(add(1,2)) 


// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage() 

// console.log(this)




// const addTwo = (num1, num2) => {return {username: "hitesh"}}
// console.log(addTwo(3, 4))

(function () {
    var message = "Hello";
    console.log(message);
})();
console.log(message);

(function () {
    console.log(message);
})();
