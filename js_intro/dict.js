
// a common idiom is to test a dictionary for existence of a key
// if the key doesnt exist then add to dict w count of 0
// else increment the existing count by one
function populate_dict(dict,addMe){
   if (addMe in dict){
      dict[addMe]=dict[addMe]+1;
   }
   else{
      dict[addMe]=0;
   }
}

d={"a":1,"c":3};
console.log("dict before:",d);
populate_dict(d, "c");
console.log("dict after:",d);
populate_dict(d,"b");
console.log("dict after:",d);

// js implementation 
const js_dict=(dict,addKey)=>{
  dict[addKey] = dict[addKey] +1 || 0;

}
e={"a":1,"c":4};
console.log("e before:",e);
js_dict(e,"c");
console.log("e after:",e);
js_dict(e,"b");
console.log("e after adding non_existing key:",e);

