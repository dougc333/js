function intMax(a,b,c){
  arr=[];
  arr.push(a);
  arr.push(b);
  arr.push(c);
  arr.sort();
  return arr[arr.length-1];
}

var test1 = intMax(1,2,3);

if(test1==3){
  print("test1 correct");
}else{
  print("test1 incorrect");
}


