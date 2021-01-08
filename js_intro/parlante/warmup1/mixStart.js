function mixStart(str){ 
  if(str.substring(1,3)=="ix"){
     return true;
  }
  return false;
}

var test1 = mixStart("mix snacks");
var test2 = mixStart("pix snacks");
var test3 = mixStart("piz snacks");
 
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

