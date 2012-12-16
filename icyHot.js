// function icyHot()
// ---------------------------
// return true if one less than 0 and ohter greater than100
function icyHot(a,b){
   if( (a<0 && b>100) || (a>100 && b<0) ){
     return true;
   }
   return false;
}


var test1=icyHot(120,-1);
var test2=icyHot(-1,120);
var test3=icyHot(2,120);

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

