// const mySym = Symbol("key1")

// const JsUser ={
//     name: "John Doe",
//     age: 30,
//     email:"john@doe",
//     location:"Suriya",
//     loggedInDays :["Monday","Saturday","Sunday"],
// }
// // JsUser[mySym]= "Hello"
// // console.log(JsUser)

// // console.log(JsUser.name);  // John Doe
// // console.log(JsUser["age"]); // 30
// // console.log(JsUser[location])

// Object.freeze(JsUser)
// JsUser.greeting = function(){
//     console.log("Hello ankit");
// }
// // console.log(greeting)
// // console.log(JsUser.greeting)
// // console.log(JsUser.greeting())
// console.log(typeof greeting)

// console.log(tinderUser)
const tinderUser = {}
const tinder = new Object()
// console.log(tinderUser)
// console.log(tinder)


// console.log(a) // Reference error because a is not defined
// a:{
//     apple:"fruit"
// }

// console.log(a) // Reference error because a is not defined


const user = {
    email :"ankit@ankit.com",
    fullname:{
        userFullName :{
            firstName : "Ankit",
            lastName : "Saw"
        }
    }
}

// const deep = JSON.stringify(user)
const deep = JSON.parse(JSON.stringify(user))
// console.log(user)
console.log(deep)


// const userCopy = {...user}
// console.log(userCopy) 

// userCopy.fullname.userFullName.firstName = "Krishna"
// console.log(userCopy)
// console.log(user)

// console.log()
// user.email = "krishna@krishna.com"
// user.fullname.userFullName.firstName = "Vikram"
// console.log("User copy data :",userCopy)
// console.log(user)















// console.log(user.fullname)
// console.log(user?.userFullName)
// console.log(user.firstName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// object.assign(target,source)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "ankit@gmail.com"
    },
    {
        id: 2,
        email: "krishna@gmail.com"
    },
    {
        id: 3,
        email: "shubham@gmail.com"
    },
]

// console.log(users[0]) // { id: 1, email: 'ankit@gmail.com' }
// console.log(users[1].email) // krishna@gmail.com

