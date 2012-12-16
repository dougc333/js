// function missing_char()
// -----------------------
// given nonempty string str and int n, return a new string where char at index n is removed
function missing_char(str,n){
   if(n==0){
    return str.substring(1,str.length);
   }
   if(n>0){
    return str.substring(0,n)+str.substring(n+1,str.length);
   }
}

var test1=missing_char("asdf",0);
var test2=missing_char("asdf",1);
var test3=missing_char("asdf",2);
var test4=missing_char("asdf",3);

if(test1=="sdf"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}
if(test2=="adf"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3=="asf"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}
if(test4=="asd"){
  print("test4 correct");
}else{
  print("test4 incorrect");
}


