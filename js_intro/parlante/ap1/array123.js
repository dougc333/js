// function array123()
// --------------------------
// return true if 1,2,3 appear
function array123(arr){
    if(arr.length<3){
        return false;
    }     

    for(var i=0;i<arr.length-2;i++){
          if(arr[i]==1 && arr[i+1]==2 && arr[i+2]==3){
             return true;
          }
    }

    return false;
}

var test1 = array123([1,1,2,3,1]);
var test2 = array123([1,1,2,4,1]);
var test3 = array123([1,1,2,1,2,3]);

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

