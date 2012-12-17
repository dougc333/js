// function monkey_trouble
// --------------------------------------
// return true if both smiling or neither smiling
function monkey_trouble(a_smile,b_smile){
   if( (a_smile==true && b_smile==true) || (a_smile==false && b_smile==false)){
      return true;
   }
   return false;
}


var test1=monkey_trouble(true,false);
var test2=monkey_trouble(false,true);
var test3=monkey_trouble(true,true);
var test4=monkey_trouble(false,false);

if(test1==false){
  print("test1 correct");
}

if(test2==false){
  print("test2 correct");
}

if(test3==true){
  print("test3 correct");
}

if(test4==true){
 print("test4 correct");
}

