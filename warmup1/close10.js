function close10(a,b){
   var diff1 = Math.abs(a-10);
   var diff2 = Math.abs(b-10);

   if(diff1==diff2){
      return 0;
   }
  
   if(diff1<diff2){
      return a;
   }

   if(diff2 < diff1){
      return b;
   }


}


var test1 = close10(8,13);
var test2 = close10(13,8);
var test3 = close10(13,7);

if(test1==8){
  print("test1 correcct");
}else{
  print("test1 incorrect");
}

if(test2==8){
  print("test2 correcct");
}else{
  print("test2 incorrect");
}

if(test3==0){
  print("test3 correcct");
}else{
  print("test3 incorrect");
}


