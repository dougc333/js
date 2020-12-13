// function countXX()
// ----------------------------
// count number of XX in str
function countXX(str){
  
  var num=0;

  for(var i=0;i<str.length-1;i++){
    if(str.charAt(i)=="x" && str.charAt(i+1)=="x"){ 
        num++;
    }
  }

  return num;

}


var test1 = countXX("abcxx");
var test2 = countXX("xxx");
var test3 = countXX("xxxx");

if(test1==1){
   print("test1 correct");
}else{
   print("test1 incorrect");
}
if(test2==2){
   print("test2 correct");
}else{
   print("test2 incorrect");
}
if(test3==3){
   print("test3 correct");
}else{
   print("test3 incorrect");
}

