// function stringYak()
// ------------------------------
// return sring where yak are removed, but a can be any character
function stringYak(str){
  
  var returnStr="";
  var i = 0;
  
  while(i<=str.length){
     if(str.charAt(i)=="y" && str.charAt(i+2)=="k"){
        i=i+3;   		         
     }else{
        returnStr = returnStr+str.charAt(i);
        i=i+1;
     }
  }
  return returnStr;

}

var test1 = stringYak("yakpak");
var test2 = stringYak("pakyak");
var test3 = stringYak("yak123ya");

if(test1=="pak"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2=="pak"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3=="123ya"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}

