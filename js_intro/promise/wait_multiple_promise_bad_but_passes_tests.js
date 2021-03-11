
//multiple promises ie wait for db to return or req to complete. 
//


//chaining promises
const fn_first =()=>{
 console.log("fn_first before timeout");
 setTimeout(()=>{},1000);
 console.log("fn_first after timeout");
 }
 
 const fn_second =() =>{
  console.log("fn_second before timeout");
  setTimeout(()=>{},100);
  console.log("fn_second after timeout");
}

fn_first();
fn_second();
