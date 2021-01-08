//define a remove method


class L2 {
  constructor(){
    this.nodes = [];
  }
  exists(findMe){
    for (x of this.nodes){
       if (x===findMe){
         return true
       }
    }
    return false;
  }

  better_exists(x){
     this.nodes.includes(x);
  }

}
