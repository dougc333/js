
const path=require('path');
const fs = require('fs');
const ast = require('ast');
const { Parser } = require("acorn")
//const ast = Parser.parse(readFileSync(fileName).toString())
const depsArr=[]
file='file1.mjs';
const depsGraph = (file) =>{
  const fullPath = path.resolve(file);
  if (!!depsArr.find(item=>item.name===fullpath)) return;
  const fileContents = fs.readFileSync(fullPath,"utf8");
  console.log('fileContents:',fileContents);
  const source = Parser.parse(fileContents);
  const module={
      name:fullPath,
      source,
  };
  source.body.map(current=>{
    //decls only? 
    console.log("current:",current);
    if(current.type ==="ImportDeclaration"){
      depsGraph(current.source.value);
    }
  });

  depsArr.push(module);

  return depsArr;
};

depsGraph(file);