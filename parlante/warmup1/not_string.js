//function not_string
//-----------------------
// return new string where 'not' has been added to the front
//
function not_string(str){
   return "not"+str;
}

var test1=not_string("asdf");

if(test1=="notasdf"){
  print("test1 correct");
}else{
  print("test1 not correct");
}


