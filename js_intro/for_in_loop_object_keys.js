

//loop through array

arr=[1,2,3,4,5];

//this is better? Same lines of code as old way. 
const first = ()=>{
  for (let x of arr){
     console.log(x);
  }

}
first();

console.log("callback functoin array");
console.log("\n");


//second is a callback function called once for each element with forEach
//maybe save 1 line of typing if you count braces as lines. Harder to read. Reader has
//to track down the callback function. Confusing. 
const second=(x)=>{
  console.log(x);
}

arr.forEach(second);

console.log("the old way");
console.log("\n");
console.log("\n");

const third = ()=>{
  for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
  }
}

third();

