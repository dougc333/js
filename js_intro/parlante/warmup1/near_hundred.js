//
function near_hundred(n){
  if(Math.abs(n-100)==0 || Math.abs(n-100)==10 || Math.abs(n-100)==100 || Math.abs(n-100)==200){
    return true;
  }
  return false;
}


var test1=near_hundred(0);
var test2=near_hundred(10);
var test3=near_hundred(100);
var test4=near_hundred(200);
var test5=near_hundred(50);

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


if(test3==true){
  print("test3 correct");
}else{
  print("test3 incorrect");
}


if(test4==true){
  print("test4 correct");
}else{
  print("test4 incorrect");
}


if(test5==false){
  print("test5 correct");
}else{
  print("test5 incorrect");
}


