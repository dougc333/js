//objects and funny stuff
//object literal different behavior and methods than instantiated object
//dynamic properties

const name="bob"; 
const age=100; 

const hairColor="a";

const person={
  name:"somebody",
  "country":"India",
  sayHi(){
    console.log("hi");
  },
  "fn name w spaces"(){
    console.log("this is new, fn names w spaces");
  }
}


console.log("an object isn't instantiated like a class");
console.log("also know as a JSON object");
console.log("static but some funny behavior compared to compiled langs");
console.log("print person object, looks like JSON:",person);
//console.log(Object.keys(person)); not a function
//console.log(Object.getOwnPropertyNames(person));
console.log(person.dir);

console.log("----------");
//const p = person();
console.log("call method on object:");
person.sayHi();
console.log("-------------");
console.log("funny stuff, leaving values off, will search for properties outside object definition scope");

const foo="I am foo";
const prop_not_set = {
  foo,
}
console.log("prob_not_set.foo",prop_not_set.foo);
console.log("the lesson? testing just became a lot harder");
console.log("use dir:",prop_not_set.dir);
//console.log("Object.getOwnPropertyNames()",Object.getOwnPropertyNames(prop_not_set));
person["fn name with spaces"]();

