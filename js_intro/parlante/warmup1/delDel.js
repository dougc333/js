function delDel(str){
  print(str.substring(1,4));
  if(str.substring(1,4)=="del"){
    return str.substring(0,1)+str.substring(4,str.length);
  }
  return str;
}


var test1=delDel("adelbc");
var test2=delDel("adelHello");
var test3=delDel("adedbc");

if(test1=="abc"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}
if(test2=="aHello"){
  print("test2 correct");
}else{ 
  print("test2 incorrect");
}
if(test3=="adedbc"){
  print("test3 correct");
}else{ 
  print("test3 incorrect");
}


