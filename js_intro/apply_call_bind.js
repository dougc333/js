//apply, bind, call 


class MyClass{
  constructor(){
    //what is ctor for? 
    this.id=10
  }

  getIvar(args){
    for (let i=0;i<args.length;i++){
      console.log(typeof(args[i]),args[i]);
    }
    console.log("this.id:",this.id," args:",args,"args.length:",args.length);
  }

}
const mc = new MyClass();
//tricky reads 00 as string or int?
mc.getIvar(00);

mc.getIvar(1).apply(this,[1,1,1]);
mc.getIvar(2).call(this,1,2,3);


mc.getIvar(01).apply(null,[1,1,1]);
mc.getIvar(02).call(null,1,2,3);


//Function.prototype.call()
//calls a function with a comma separated list of arguments
fn.call(this,1,2,3,4);

//Function.prototype.apply()
//calls a fn with an array as arg. All the parameters are in the array
function fn(args){
  console.log("args:",args," args.length:",args.length);
  for (let i=0;i<args.length;i++){
   console.log("args[i]:",args[i]);
  }
}
console.log("testing apply, apply signature is this, []");
console.log("this:",this);
fn.apply(this,["a","b",["C","D"]]);
fn.apply(null,["Stuff"]);
console.log("testing call, signature this, csv of args ");
fn.call(this,1,2,[3,4])
//Function.prototype.bind()
fn.call(null,"more stuff");



//

