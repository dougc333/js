//rest operator ... used in case of multiple args, packs multiple args into array
//has to be last in parameter list
// fn(a,b,...c) where c represents all the other args. 


function fn_with_args(arg1,arg2,arg3,arg4,arg5){
   return arg1+arg2+arg3+arg4+arg5;
}

console.log(fn_with_args(1,2,3,4,5));
//tricky can loop over args with same syntax as array. like args=array type but is more like tuple
function fn_with_rest(...args){
  sum=0;
  console.log(typeof(args));
  for (let i=0;i<args.length;i++){
    sum=args[i]+sum;
  }
  return sum;
}

console.log(fn_with_rest(1,2,3,4,5));


