// function diff21
// ----------------
// return the absolute diff between n and 21
//
function diff21(n){
  return Math.abs(n-21);
}

var test1=diff21(21);
var test2=diff21(10);

if(test1==0){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==11){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
