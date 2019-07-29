//create a linked list with the methods add. 

class LL{
  constructor(){
    this.nodes=[];
  }
  add(x){
    this.nodes.push(x);
  }

}

l = new LL();
l.add(10);
console.log(l);
