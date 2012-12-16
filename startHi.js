function startHi(str){
  if(str.substring(0,2)=="hi"){
      return true;
  }
  return false;
}


var test1 = startHi("hiasfd");
var test2 = startHi("asfdhihi");


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
