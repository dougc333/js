// function wordsCount()
// ---------------------------------
// return count of number of string with given length
function wordsCount(strArr, n){
  var count=0;
  for(var i=0;i<strArr.length;i++){
     if(strArr[i].length==n){  
        count++;
     }
  }
  return count;

}


var test1 = wordsCount(["a","bb","b","ccc"],1);
var test2 = wordsCount(["a","bb","b","ccc"],3);
var test3 = wordsCount(["a","bb","b","ccc"],4);


if(test1==2){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==1){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3==0){
  print("test3 correct");
}else{
  print("test3 incorrect");
}



