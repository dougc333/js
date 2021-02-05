//apply, bind, call 

//Function.prototype.call()
//calls a function with a comma separated list of arguments
fn.call(this,1,2,3,4);

//Function.prototype.apply()
//calls a fn with an array as arg. All the parameters are in the array
function fn(a,r,g,s){
  console.log(a,r,g,s);
}
fn.apply(["a","b","c","d"]);

//Function.prototype.bind()



//

