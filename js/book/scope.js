//렉시컬 스코프

let x = 1;
function foo() {
  let x = 10;
  bar();
}

function bar(){
  console.log(x);
}

foo();
bar();

var y = 1;
function eoo() {
  console.log(y);
  var y = 2;
}
eoo();
console.log(y);