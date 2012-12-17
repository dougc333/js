
// function pos_neg()
// ------------------------
// return true if one is negative and one is positive, except if negative is true
// then return true only if both are negative 
function pos_neg(a,b,negative){
  if(negative==true){
     if(a<0 && b<0){
        return true;
     }
     return false;
  }

  if( (a<0 && b>0) || (a>0 && b<0)){
     return true;
  }
  return false;
}

var test1=pos_neg(1,2,false);
var test2=pos_neg(-1,10,false);
var test3=pos_neg(10,100,false);
var test4=pos_neg(-1,-1,true);
var test5=pos_neg(1,-1,true);
var test6=pos_neg(-1,1,true);


if(test1==false){
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
if(test5==false){
  print("test5 correct");
}else{
  print("test5 incorrect");
}
if(test6==false){
  print("test6 correct");
}else{
  print("test6 incorrect");
}


