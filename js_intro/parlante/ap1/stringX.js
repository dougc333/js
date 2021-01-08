// function stringX()
// -----------------------------
// return string w/x removed except if x is at start or end of string
function stringX(str){
  if(str.length<=2){
     return str;
  }
  var returnStr=str.charAt(0);
  for(var i=1; i<str.length-1;i++){
      if(str.charAt(i)!="x"){
        returnStr=returnStr+str.charAt(i);
      }
  }
  returnStr = returnStr+str.charAt(str.length-1);
  return returnStr;
}

var test1 = stringX("xxHxix");
var test2 = stringX("abxxxcd");
var test3 = stringX("xabxxxcdx");

if(test1=="xHix"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}
if(test2=="abcd"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3=="xabcdx"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}


