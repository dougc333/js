// function scores100()
// --------------------------------
// return true if there is 100 next to each other. arr length at least 2. 
function scores100(scores){
    
   for(var i=0;i<scores.length-1;i++){
      if(scores[i]==100 && scores[i+1]==100){
        return true;
      }
   }

   return false;

}

var test1 = scores100([1,100,100]);
var test2 = scores100([1,100,99,100]);
var test3 = scores100([100,1,100,100]);


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

