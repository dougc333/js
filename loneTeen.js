function loneTeen(a,b){
  if( (a>=13 && a<=19) || (b>=13 && b<=19) ){
    return true;
  }
  return false;
}

var test1=loneTeen(13,99);
var test2=loneTeen(21,19);
var test3=loneTeen(13,13);

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
if(test3==true){
  print("test3 correct");
}else{
  print("test3 incorrect");
}

