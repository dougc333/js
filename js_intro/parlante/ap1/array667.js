// function667()
// ------------------------------- 
// return number of times 2 6's are next to each other. count instances where second 6 is a 7.
function array667(arr){
  
  var count=0;
 
  for(var i=0;i<arr.length-1;i++){
     
     if(arr[i]==6 && (arr[i+1]==6 || arr[i+1]==7) ){ 
	count++;
     }
  }

  return count;

}

var test1 = array667([6,6,2]);
var test2 = array667([6,6,2,6]);
var test3 = array667([6,7,2,6]);


if(test1==1){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==1){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3==1){
  print("test3 correct");
}else{
  print("test3 incorrect");
}



