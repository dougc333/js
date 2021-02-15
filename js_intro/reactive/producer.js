

class Producer{
  constructor(){
    this.listeners=[];
  }

  add(listener){
   this.listeners.push(listener);
  }

  remove(listener){
    const index=this.listeners.indexOf(listener);
    this.listners.splice(index,1);
  }

  notify(message){
    this.listeners.forEach(listener=>{
      listener.update(message);
    });
  }
}
const listener1={
  update: message=>{  
    console.log("listener 1 reseived",message);
  }

};

const n = new Producer();
n.add(listener1);
n.notify("asdf");

