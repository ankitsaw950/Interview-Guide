## Notes of The day

sync ka  matlab ek baad dusra hoga , jab tak ek command commplete naa ho , tab tak dusra shuru nahi hoga (compiler)

async matlab saare kaam ek sath suru kardo , jisk answer pahle aa jaye uska jawab dedena (interpreter)

task a-2
task-5 
task-c 7

how to find whether the code is sync or async

setTimeout
setInterval promises
fetch
axios
XMTLhttprequest


async js hai kya ?
->
setTimeout(callback,time)
callback kya hota hai 
settimeout kya hota hai 

callback function hamesha async code mein answer aane par chalta hai 


->promises
->async , await





js is not asynchronous 
->async ka matlab hota hai 2 kaam ek sath do kaam hona
->It is single threading


->jo bhi main stack pe hota hai , wo output karta  hai

->jo side stack pe hota hai , wo wo behind the scenes processing karta hai ar jab uski processing complete ho usse main stack mein laa kar chalaya jata hai 

jab main stack khali hota ha tab side stack ko check kiya jaat hai ki uska processing complete huwa ki nahi , in case complete ho jaata hai toh tab usko main stack me laaya jayega


```
| main stack|               | asynchronous (side stack)  |
|---------   |    event loop           |---------|
| Row 1      |     ---->     | Row 1   |
| Row 2      |     <----     | Row 2   |
| Row 3      |               | Row 3   |
```
### Main Stack and Side Stack Demonstration

| Main Stack | Event Loop | Side Stack (Asynchronous) |
|------------|------------|---------------------------|
| Task 1     |            |                           |
| Task 2     |            |                           |
| Task 3     |            |                           |
|            |   ---->    | Async Task 1              |
|            |   <----    | Async Task 2              |
|            |            | Async Task 3              |

1. **Main Stack**: Executes tasks sequentially.
2. **Side Stack (Asynchronous)**: Handles asynchronous tasks.
3. **Event Loop**: Moves tasks from the side stack to the main stack when the main stack is empty.

#### Example Workflow:
1. Main stack starts with Task 1, Task 2, and Task 3.
2. Async Task 1, Async Task 2, and Async Task 3 are in the side stack.
3. Event loop checks if the main stack is empty.
4. Once the main stack is empty, the event loop moves tasks from the side stack to the main stack for execution.


console.log("hi 1")
console.log("hi 2")
console.log("ankit")
console.log("saw")
console.log("raj")
setTImeout (function(){
    console.log("hey 3")
},0)
console.log("hi 4")
console.log("yellow")
console.log("blue")

output :
hi 1
hi 2
hi 4
hey 3


Single threading , multiple threading

->callbacks - humesha ek function hot hai ,
         ye sirf tab chalta  jab async code ka complettion ho jata hai

->async await
->then catch 

why we use async await, then catch , callbacks

                promise
                /     \
             /         \
        resolve(then)   reject(catch)

var ans = new Promise((resolve, reject) =>{
    if(true){
        return resolve()
    } else {
        return reject()
    }
})

ans
.then(function(){
    console.log("Resolve ho gaya tha )
})
.catch(function(){
    console.log("Reject huwa tha )
})



if promise is a constructor then it means that promise is a class

concurrency and parallelism
throttling




