const str1 = "{}";
stack=[];
 
open_paren=['(','{','['];
closed_paren = [')','}',']'];


for ( x of str1){
  console.log("processing:",x);
  if (open_paren.includes(x))
  {
     console.log("open paren pop:",stack.push());
  } else if (closed_paren.includes(x))
  {
     console.log("closed paren push:",stack.pop(x));
  }
}

if (stack.length===0){
  console.log("balanced paren:",stack.length);
}else{
  console.log("paren not balanced");
}

