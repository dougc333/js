//
// function last2()
// -----------------------------
// return number times substring length 2 appears in string which is last 2
// chars of string
function last2(str){
  var count=0;
    
  for(var i=0;i<str.length-2;i++){
    if(str.charAt(i)==str.charAt(str.length-2) && str.charAt(i+1)==str.charAt(str.length-1)){
	count++;
    }
  }
  return count;
}

var test1 = last2("hixxhi");
var test2 = last2("xaxxaxaxx");
var test3 = last2("axxxaaxx");

if(test1==1){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==1){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3==2){
  print("test3 correct");
}else{
  print("test3 incorrect");
}


