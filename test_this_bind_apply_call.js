//case 1) this pointer is global to window or global object in node
//run from CLI
console.log(this)

const someobj = {
  name:"someobj",
  print_this:function(arg){
    console.log(this.name+" arg:",arg)
    console.log("this:",this)
  }
}


console.log("number 2 this:",)


var person = {
   name:'bob',
   hello:function(a){
     console.log(this.name + " says hello " + a)
   }
}

person.hello("world")
//call arguments? call attaches this to function?
console.log("-----call-----")
person.hello.call({name:"foo"},"world")
console.log("-----bind-----")
var helloFunc = person.hello.bind({name:"bind_name"})
helloFunc("world")


//one difference is apply second arg is arguments; verify official docs
//how to print out arguments[...] 1 to end? 
function personContainer(){
  var person={
    name:"james smith",
    hello:function(){
      console.log(this.name + "says hello " + arguments[1])
    }
  }
  person.hello.apply(person,arguments)
}

console.log("-----apply-----")
personContainer("world", "mars","venus","pluto")

//bind returns a function to be executed later
//wow what is arguments? this should work like bind? 
Function.prototype.bindMe = function(ctx){
  const fn = this
  console.log("bindMe ctx:",ctx)
  return function(){
    fn.apply(ctx, arguments);
  }
}

function add(a,b){
  return a+b;
}
//what is the ctx? how does bind ignore the first argument 10? 
increment=add.bind(10,1)
console.log(increment(2))
incrementMe = add.bindMe(10,1)
console.log(incrementMe(4))


//call and apply
