



class Obj_With_Iterator{
  constructor(name,arr){
     this.name=name;
     this.array=arr;
     this.cursor=0;
  }

  next(){
    while(this.cursor < this.array.length){
      return this.array[++this.cursor-1];
    }
  }

  hasNext(){
    if (this.cursor<this.array.length){
       return true;
    }
    return false;
  }


}

const obj = new Obj_With_Iterator("first_obj",[1,2,3,4,5,6]);
while (obj.hasNext()){
   console.log(obj.next());
}




