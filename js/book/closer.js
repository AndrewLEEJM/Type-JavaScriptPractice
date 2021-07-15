const x = 1;
function foo(){
  const x = 10;
  bar();
}

function  bar(){
  console.log(x);
}

foo();
bar();

let xx = 0;

function closer() {
  let xx = 10;

  function ser(){
    console.log(xx);
  }

  ser();
  return ser;
}

const test = closer();
test();