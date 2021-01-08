
// function frontTimes()
// ---------------------------
// return n copies of front of string, front is first 3 chars or whatever is there if less than 3
function frontTimes(str,n){
     var big="";
     if(str.length<3){
      
      for(var i=0;i<n;i++){
         big=big+str;
      }
   }else{
      for(var i=0;i<n;i++){
         big=big+str.substring(0,3);
      }
   }

   return big;
   
}

var test1 = frontTimes("Chocolate",2);
var test2 = frontTimes("Chocolate",3);
var test3 = frontTimes("Abc",3);

if(test1=="ChoCho"){
   print("test1 correct");
}else{
   print("test1 incorrect");
}
if(test2=="ChoChoCho"){
   print("test2 correct");
}else{
   print("test2 incorrect");
}
if(test3=="AbcAbcAbc"){
   print("test3 correct");
}else{
   print("test3 incorrect");
}
