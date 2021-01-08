// function arrayFront9()
// -----------------------------
// return true of one of the first 4 elements is a 9
function arrayFront9(arrInt){
    
    for(var i=0;i<arrInt.length;i++){
        if(arrInt[i]==9 && i<=3){  
           return true;
        }
    }
    return false;
}

var test1 = arrayFront9([1,2,9,3,4]);
var test2 = arrayFront9([1,2,3,4,9]);
var test3 = arrayFront9([1,2,3,4,5]);

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
if(test3==false){
   print("test3 correct");
}else{
   print("test3 incorrect");
}



