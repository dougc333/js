
// function stringTimes()
// ---------------------------
// return a larger string that is n copies of orig string
function stringTimes(str,n){
  
  big="";

  for(var i=0;i<n;i++){
    big = big+str;
  }
  return big;
}

var test1 = stringTimes("Hi",2);
var test2 = stringTimes("Hi",3);
var test3 = stringTimes("Hi",1);

if(test1=="HiHi"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2=="HiHiHi"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3=="Hi"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}





