// Find maximum element in the array

let arr = [1, 2, 3, 3, 4, 6, 7, 9, 9];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}

console.log("The maximum element : " + max);

//Find the minimum element in the array

let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) min = arr[i];
}

console.log("The minimum element : " + min);

// Find the second maximum element in the array
let smax =arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>smax && arr[i]!=max)
        smax=arr[i];
}

console.log("The second maximum element : " + smax);