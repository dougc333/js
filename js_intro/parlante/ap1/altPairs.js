//
// function altPairs()
// --------------------------------
// return string made of chars at indexes 0,1,4,5,8,9
function altPairs(str){
  
  if(str.length==0){
    return;
  }

  var i=0;
  var returnStr=str.charAt(0);
  while (i<=str.length){
     
     if(i%2==0){
       i=i+1;
       returnStr = returnStr+str.charAt(i);
     }else{ 
       i=i+3;
       returnStr = returnStr+str.charAt(i);
     }
  }
  return returnStr;
  
}


var test1 = altPairs("kitten");
var test2 = altPairs("Chocolate");
var test3 = altPairs("CodingHorror");

if(test1=="kien"){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2=="Chole"){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3=="Congrr"){
  print("test3 correct");
}else{
  print("test3 incorrect");
}




