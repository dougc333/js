//abstract base class


class BigAbstract{
  constructor(){
     if(this.method ===undefined){
       console.log("must implement method");
     }

  }

}

class Derive extends BigAbstract{
  
}

const d = new Derive();

