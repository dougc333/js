function startOz(str){
  if(str.substring(0,1)=="o"){  
      
     if(str.substring(1,2)=="z"){ 
        return "oz"; 
     }
     return "o";
  }

  if(str.substring(1,2)=="z"){
     return "z";
  }
  return "";
}


var test1 = startOz("ozymandias");
var test2 = startOz("bzoo");
var test3 = startOz("oxx");
var test4 = startOz("");

if(test1=="oz"){
  print("test1 correct");
}else{ 
  print("test1 incorrect");
}

if(test2=="z"){
  print("test2 correct");
}else{ 
  print("test2 incorrect");
}

if(test3=="o"){
  print("test3 correct");
}else{ 
  print("test3 incorrect");
}

if(test4==""){
  print("test4 correct");
}else{ 
  print("test4 incorrect");
}



