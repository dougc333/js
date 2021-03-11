//promise allows chaining of fn similar to builder pattern but
//these are async guaranteed. 
//mych easier to get used to than OO
//the args into promise are fn name for the callback in the then and
//an err arg. 
const a  = new Promise((fn,err)=>{
  console.log("before setTimeout")
  setTimeout(()=>{
     console.log("in setTimeout")
     fn(100)
  },1000);
  console.log("after setTimeout")
})

a.then((x)=>{console.log(x)}
)
