//Use `map()` to double all the elements in an array.


function DoubleArray(arr)
{
    return arr.map((num)=>{
        return num*2;
    })
}
let arr= [10,20,30, 40,50];
console.log(DoubleArray(arr));