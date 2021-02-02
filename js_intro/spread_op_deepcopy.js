//array

const arr=[1,2,3,[4,[5,6]]]
const copy_arr=[...arr];
console.log("copy_arr:",copy_arr);
console.log("arr[3]:",arr[3]);

console.log("copy_arr[3]:",copy_arr[3]);
console.log(arr[3][0])

arr[3][0]=70;
console.log(arr[3][0])


copy_arr[3][1][0]=80;
console.log(copy_arr[3][1][0])

const o = {
  name:"ob",
  num:5,
  get_this: function(){
    console.log('get_this this:',this);
  }
}


o.get_this();
const b = [...o];
console.log(b);

