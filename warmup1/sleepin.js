function sleepin(weekday, vacation){
   if(weekday==false || vacation==true)
      return true;
   return false;
}


//test cases for sleeping
var test1=sleepin(true,false);
var test2=sleepin(true,true);
var test3=sleepin(false,true);
var test4=sleepin(false,false);

if(test1==false){
  print("test1 passed");
}

if(test2==true){
 print("test2 passed");
}

if(test3==true){
 print("test3 passed");
}

if(test4==true){
 print("test4 passed");
}

