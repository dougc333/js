function in1020(a,b){
  if( (a<20 && a>10) || (b>10 && b<20) ){
   return true;
  }
  return false;
}

var test1 = in1020(12,99);
var test2 = in1020(21,12);
var test3 = in1020(8,99);

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
