// function stringMatch()
// --------------------------------
// return the number of positions where 2 strings contain the same length 2 substring
function stringMatch(stra, strb){
   var count=0;
   for(var i=0;i<stra.length-1;i++){
      substra = stra.charAt(i) + stra.charAt(i+1);
      //add print statement as part of problem statement
      //print("substra:",substra);      
      for(var j=0;j<strb.length-1;j++){
          if(strb.substring(j,j+2)==substra){
             count++;
          }
      }

   }
   return count;

}

var test1 = stringMatch("xxcaazz","xxbaaz");
var test2 = stringMatch("abc","abc");
var test3 = stringMatch("abc","axc");


if(test1==3){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==2){
  print("test2 correct");
}else{
  print("test2 incorrect");
}

if(test3==0){
  print("test3 correct");
}else{
  print("test3 incorrect");
}


