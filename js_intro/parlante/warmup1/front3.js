//function front3
//return new string with 3 copies of front. front is frist 3 chars if they exist,if less than 3 chars then 
//front is whatever is there
function front3(str){
  if(str.length<3){
     return str+str+str;
  }
  return str.substring(0,3)+str.substring(0,3)+str.substring(0,3);
}

var test1=front3("as");
var test2=front3("teststring");
var test3=front3("123");

if(test1=="asasas"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2=="testestes"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3=="123123123"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}
