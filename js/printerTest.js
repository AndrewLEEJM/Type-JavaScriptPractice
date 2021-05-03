function solution(priorities, location) {
  let newArr = [];
  priorities.forEach((n, idx) => {
    newArr.push({ val: n, want: location === idx ? "O" : "X" });
  });
  priorities.sort((a, b) => a - b);
  let result = 0;
  while (true) {
    let maxNum = priorities[priorities.length - 1];
    console.log(newArr);
    if (maxNum === newArr[0].val) {
      result++;
      if (newArr[0].want === "O") {
        return result;
      }
      newArr.shift();
      priorities.pop();
    } else {
      let temp = newArr.shift();
      newArr.push(temp);
    }
  }
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
