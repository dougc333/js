
//chaining promises

const fn_first = new Promise((resolve,err)=>{
   setTimeout(()=>{resolve(100)},1000);
 }).then( (result)=>{
   console.log("result:",result)  
   return(result+100);
});

fn_first.then(x=>console.log(x))
  

