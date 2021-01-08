// prefix namespace, each function has a unique name with a common prefix
// good for small. each function is a unique global variable. Makes loading
// large prefix functions slower by taking up memory if functions not used
//
var myApp_count = function(str){
  return str.length;
}

console.log("prefix namespace test should see 5");
console.log(myApp_count("hello"));

//object namespace, hide code inside a global object 
var myObject = {}
myObject.count = function(str){
  return str.length;
}

console.log("object namespace test should see 4");
console.log(myObject.count("test"));

//note no var assignement needed
var global = {};
global.fn = function(){};

(function(){
  global.fn.count=function(str){
    return str.length;
  }
})();

console.log(global.fn.count("hi"));

