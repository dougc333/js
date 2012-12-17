
// function scoresIncreasing(scores[])
// ---------------------------------------
// given an array of scores return true if each score is equal to 
// or greater than the one before. array will be length 2 or more
function scoresIncreasing(scores){
   var isInc=true;

   for(var i=0;i<scores.length-1;i++){
      if(scores[i]>scores[i+1]){
         return false;
      }
   }
   return true;
}


var test1 = scoresIncreasing([1,3,4]);
var test2 = scoresIncreasing([1,3,2]);
var test3 = scoresIncreasing([1,1,4]);


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




