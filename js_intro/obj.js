

class Person{
  constructor(name,age){
    this.name="bob";
    this.age = 100;
  }
}

const p = new Person("a",10);
console.log(p.dir);
console.log(Object.getOwnPropertyNames(p));
console.log(Object.keys(p));

