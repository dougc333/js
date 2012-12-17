//function backAround()
//---------------------------------
//return new string w/lact char added to front and back
//original string is length 1 or more
function backAround(str){
  return str.substring(str.length-1,str.length)+str.substring(0,str.length)
}

var test1=backAround("asdf");
var test2=backAround("cat"); 
var test3=backAround("Hello");
var test4=backAround("a");

if(test1=="fasdf"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2=="tcatt"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3=="oHelloo"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}

if(test4=="aaa"){
  print("test4 correct");
}else{
  print("test4 incorrect");
}

