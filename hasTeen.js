function hasTeen(a,b,c){
  if( (a<=19 && a>=13) || (b<=19 && b>=13) || (c<=19 && c>=13)){
    return true;
  }
  return false;
}

var test1 = hasTeen(13,20,10);
var test2 = hasTeen(20,19,10);
var test3 = hasTeen(20,10,13);

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

