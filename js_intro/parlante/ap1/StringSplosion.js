// function stringSplosion()
// --------------------------------
// given Code return CCoCodCode
// notes for module: add more double loop problems
function stringSplosion(str){
   var st="";
   for(var i=0;i<str.length;i++){
        st=st+str.substring(0,i+1);
   }
   return st;
}

var test1 = stringSplosion("Code");
var test2 = stringSplosion("abc");
var test3 = stringSplosion("ab");

if(test1=="CCoCodCode"){
   print("test1 correct");
}else{
   print("test1 incorrect");
}

if(test2=="aababc"){
   print("test2 correct");
}else{
   print("test2 incorrect");
}
if(test3=="aab"){
   print("test3 correct");
}else{
   print("test3 incorrect");
}

