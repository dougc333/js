//iterate list using callbacks


test_list = ["first object is a string", 3, {
              name:"third object",
              num:100,
            }, 4.14]

const list_me=(err,my_list)=>{
  my_list.forEach((x)=>{
    console.log(x);
  });
}

list_me(test_list);


