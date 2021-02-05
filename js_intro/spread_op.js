//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//spread and rest syntax are identical
//spread for separating arrays or strings into individual parameters in fn parameter list


const arr=[1,2,3,4,5,];

//
//Math.max(arr); wont work because Math.max works on tuple of parameters
//use spread to convert array to tuple or to unpack array
//

console.log(Math.max(...arr));


console.log('printing arr:',...arr);
console.log("warning: only goes 1 deep down!");

const zero = [1,[2,["a",["c"]],"b"],3];


const copy_zero = [...zero];
console.log("zero:",zero);
console.log("JSON stringify:",JSON.stringify(zero));
console.log("why does JSON stringify correctly print nested array and spread not? ");

console.log("copy_zero:",copy_zero);

const one = [[1],[2],[3]];
const b = [...one]

console.log("one:",one);
console.log("b:",b);



console.log("... operator good for concat arrays");
const zero_a = [1,[2,["a",["c"]],"b"],3];

const zero_b = [11,[21,["a1",["c1"]],"b1"],31];
const concat = [zero_a, zero_b];
console.log(JSON.stringify(concat));




