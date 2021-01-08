// function scoresAverage()
// ----------------------------------
// compute the int avg. of the first half and second half and return
// larger. Write a separate helper function average(int []scores, int start, int end) which computes the average of elements betwen indexes
// start and end. note this doesnt require converting between ints and floats
// like we need in Java

function scoresAverage(scores){
    var firstAvg = average(scores, 0, scores.length/2);
    var secondAvg = average(scores, (scores.length/2)+1, scores.length);

    //print("firstavg:",firstAvg);
    //print("secondAvg:",secondAvg);
    
    if(firstAvg>secondAvg){
        return firstAvg;
    }
    return secondAvg;
}

function average(scores, start, end){
    var sum=0;

    for(var i=start;i<end;i++){
       sum = sum+scores[i];
    }
    return sum/(end-start);
}

var test1 = scoresAverage([2,2,4,4]);
var test2 = scoresAverage([4,4,4,2,2,2]);
var test3 = scoresAverage([3,4,5,1,2,3]);


if(test1==4){
  print("test1 correct");
}else{
  print("test1 incorrect");
}
if(test2==4){
  print("test2 correct");
}else{
  print("test2 incorrect");
}
if(test3==4){
  print("test3 correct");
}else{
  print("test3 incorrect");
}


