
try{
 console.log("hoisting var decl foo")  
 console.log(foo)
}catch(err){
 console.log("var decl not hoisted",err)
}


try{
 console.log("hoisting const decl const_foo")
 console.log(const_foo)
}catch(err){
 console.log("const decl not hoisted",err)
}

try{
 console.log("hoisting let decl let_foo")
 console.log(let_foo)
}catch(err){
 console.log("let decl not hoisted",err)
}


var foo
foo=10

const const_foo=100
let let_foo
let_foo=200

