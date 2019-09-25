//test classes ES6 supposed to use # is private data member
//works in chrome doesnt work in VSCODE
//private data uses # well that isnt what vscode says.. 
//says hash is invalid character! chrome ok! 
//careful there is javascript, JavascriptReact, Typescript, Typescript React settins

class Cat{
  #name
  _name
  constructor(name){
    this._name=name
  }
  set name(name){
    this.#name=name
  }
  //if this isnt here the runtime creates this!
  get name(){
    console.log("calling get name")
    return this.#name
  }
}

const c = new Cat('fil') 
c.name = "missing"  //problem is you can add to the runtime object wo error messages
console.log(Object.getOwnPropertyNames(c))
console.log(c) //object has a property _name set to fil
console.log(c.name)
c._name="b"
console.log(c.name) //correct, uses underscore data member as generated get name
console.log(c)

