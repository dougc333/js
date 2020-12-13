function in3050(a,b){
  if( (in3040(a) && in3040(b)) || (in4050(a) && in4050(b)) ){  
     return true;
  }
  return false;
}

function in3040(a){
  if(a>=40 && a>=30){  
    return true;
  }
  return false;
}

function in4050(a){
  if(a<=50 && a>=40){ 
     return true;
  }
  return false;
}


var test1 = in3050(30,31);
var test2 = in3050(30,41);
var test3 = in3050(40,50);

if(test1==true){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==false){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3==true){
  print("test3 correct");
}else{
  print("test3 incorrect");
}

