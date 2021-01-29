// an array w keys pointing to an /array 
//  
function array_array(arr, key){
  if (arr.includes(key)===false){
    arr.push(key);
  }
}

const array=["a","c"]
console.log("array before:",array);
console.log("adding b");
array_array(array,"b");
console.log("array after:",array);

const arr_arr = (arr,key)=>{
  arr.push( key) ; 
}

arr=["a","c"];

console.log("before arr:",arr);
arr_arr(arr,"b")
console.log("after arr:",arr);

