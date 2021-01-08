// function noTriples()
// ---------------------------
// return true is array does not contain same int 3 times in row
function noTriples(arr){
   var triple=false;

   for(var i=0;i<arr.length-3;i++){
      if(arr[i]==arr[i+1] && arr[i+1]==arr[i+2]){
         triple=true;
      }
   }

   return !triple;

}


var test1 = noTriples([1,1,2,2,1]);
var test2 = noTriples([1,1,2,2,2,1]);
var test3 = noTriples([1,1,1,2,2,2,1]);

if(test1==true){
  print("test1 correct");
}else{
  print("test1 incorrect");
}
if(test2==false){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3==false){
  print("test3 correct");
}else{
  print("test3 incorrect");
}



