// function parrot_trouble
// ------------------------------------
// return true if talking and hour before 7 or after 20
function parrot_trouble(talking, hour){
   if( (talking==true) && (hour<7 || hour >20) ){
     return true;
   }
   return false;
}

var test1 = parrot_trouble(true, 1);
var test2 = parrot_trouble(true,25);
var test3 = parrot_trouble(true,10);
var test4 = parrot_trouble(false,1);

if(test1==true){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==true){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3==false){
  print("test3 correct");
}else{
  print("test3 incorrect");
}

if(test4==false){
  print("test4 correct");
}else{
  print("test4 incorrect");
}

