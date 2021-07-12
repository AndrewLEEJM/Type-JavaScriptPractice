const strObj = new String('lee');
console.log(typeof strObj);
console.log(strObj);

const boolObj = new Boolean(false);
console.log(typeof boolObj);
console.log(boolObj);
console.log(!!boolObj);

function foo() {
  console.log(this);
}
// foo(); //global
const obj = {foo};
obj.foo();

function bar(){
  console.log('gdgd')
}
bar.prop = 10;

bar.method = function(){
  console.log(this.prop);
}

console.log(bar);
console.log(bar());

function add(x, y){
  return {x, y};
}
let inst = new add(1,2);
console.log(inst);