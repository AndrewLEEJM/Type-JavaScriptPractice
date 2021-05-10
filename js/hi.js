const hi = {
  add: (num1, num2) => num1 * num2,
  fourSecondAge: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(25);
      }, 4000);
    });
  },
};
module.exports = hi;
