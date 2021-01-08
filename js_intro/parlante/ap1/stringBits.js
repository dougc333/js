// function stringBits()
// ---------------------------
// return new string made of every other character of str
// notes: add mod practice to lecture notes for this module
function stringBits(str){
  var newStr="";   
  
  for(var i=0;i<str.length;i++){
     if(i%2==0){
        newStr=newStr+str.charAt(i);
     }
  }
  return newStr;
}


var test1 = stringBits("Hello");
var test2 = stringBits("Hi");
var test3 = stringBits("Heeololeo");

if(test1=="Hlo"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2=="H"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3=="Hello"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}


