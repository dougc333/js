// function makes10
// --------------------------
// return true if either is 10 or sum=10
function makes10(a,b){
  if(a==10 || b==10 || (a+b)==10){
    return true;
  }
  return false;
}


var test1=makes10(10,100);
var test2=makes10(-100,10);
var test3=makes10(0,0);
var test4=makes10(5,5);
var test5=makes10(100,-90);

if(test1==true){
  print("test1 correct");
}else{
  print("test1 incorrect");
}
if(test2==true){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3==false){
  print("test3 correct");
}else{
  print("test3 incorrect");
}
if(test4==true){
  print("test4 correct");
}else{
  print("test4 incorrect");
}
if(test5==true){
  print("test5 correct");
}else{
  print("test5 incorrect");
}


