// function wordsFront()
// ---------------------------------
// return new array containing first N stings. N is 1 .. length
// define a helper method to determine if 2 arrays are equal 
//
function wordsFront(strArr,n){

 var newArr=[]; //or newArr=new Array()
 
 for(var i=0;i<n;i++){
    newArr.push(strArr[i]);
 }
 
 return newArr;

}

function arraysEqual(first, second){
  if(first.length!=second.length){
     return false;
  }
 
  for(var i=0;i<first.length;i++){
    if(first[i]!=second[i]){
      return false;
    }
  }

  return true;
}


var test1 = wordsFront(["a","b","c","d"],1);
var test2 = wordsFront(["a","b","c","d"],2);
var test3 = wordsFront(["a","b","c","d"],3);

if(arraysEqual(test1,["a"])){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(arraysEqual(test2,["a","b"])){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(arraysEqual(test3,["a","b","c"])){
  print("test3 correct");
}else{
  print("test3 incorrect");
}


