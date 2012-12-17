//function front_back
//--------------------
// return new string where first and last chars are exchanged
function front_back(str){
  return str.substring(str.length-1,str.length)+str.substring(1,str.length-1)+str.substring(0,1);
}

var test1=front_back("asdf");

if(test1=="fsda"){
 print("test1 correct");
}else{
 print("test1 not correct");
}
