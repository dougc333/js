//is this a memory leak?
//v dangerous for runtime memory management
//
function* inf(){
  let count=0;
  while(true){
    yield count++; 
  }
}

const inf_gen  = inf()
for (let i=0;i<10;i++){
 const n = inf_gen.next()
 console.log(n.value,n.done)
}

