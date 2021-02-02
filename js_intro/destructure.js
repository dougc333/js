//destructure from array using bracket


let [a,b] = [2,3,4]
console.log('a is:',a);
console.log('b is:',b);

//can use to swap values
console.log('using destructuring to swap');
[b,a]=[a,b]

//destructure object

let o = {
   name:"toy",
   price:100,
   fn: ()=>{
     console.log("fn called!!!!!");
   },
   get_this:()=>{
     console.log("this:",this);
   },
   is_this:function(){
     console.log("this function:",this);
   }
}

console.log('destructuring objects how to run fn in object');
let {name,price,fn,get_this,is_this}=o;
console.log("name:",name);
console.log("price:",price);
//powerful debugging tool to reach into objects
fn();  //what if it references ivars or this in o? 
//arror functions dont have this pointer
get_this();
//this refers to parent, global object or equivalent to window
is_this();

