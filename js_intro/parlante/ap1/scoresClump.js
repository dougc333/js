// function scoresClump()
// -----------------------------------
// return true if array contains 3 adjacent scores which differ from each 
// other by at most 2. 
function scoresClump(scores){

  for(var i=0;i<scores.length-2;i++){ 
     if( ( Math.abs(scores[i]-scores[i+1])>2 ) ||  (Math.abs(scores[i+1]-scores[i+2])>2 ) ){
        return false;
     }
  }

  return true;

}


var test1 = scoresClump([3,4,5]);
var test2 = scoresClump([3,4,6]);
var test3 = scoresClump([1,3,5,5]);

if(test1==true){
  print("test1 correct");
}else{
  print("test1 incorrect");
}

if(test2==true){
  print("test2 correct");
}else{ 
  print("test2 incorrect");
}
if(test3==true){
  print("test3 correct");
}else{ 
  print("test3 incorrect");
}

