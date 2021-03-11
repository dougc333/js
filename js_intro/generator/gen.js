function * generator(){
  yield 1;
  yield 2;
  yield 3;
}

const g = generator();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
