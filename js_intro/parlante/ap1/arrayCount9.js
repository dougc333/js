//
//
//
function arrayCount9(arrInt){
  var count=0;
  for(var i=0;i<arrInt.length;i++){
    if(arrInt[i]==9){
      count++;
    }
  }
  return count++;
}

var test1 = arrayCount9([1,2,9]);
var test2 = arrayCount9([1,9,9]);
var test3 = arrayCount9([1,9,9,3,9]);

if(test1==1){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==2){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3==3){
  print("test3 correct");
}else{
  print("test3 incorrect");
}

