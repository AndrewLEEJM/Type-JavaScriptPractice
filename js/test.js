/* test("1 is 1", () => {
  expect(1).toBe(1);
});

function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}

test("return a user object", () => {
  expect(getUser(1)).toStrictEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
}); */

const fn = require("./hi");
test("팝업리스트", () => {
  return fn.getPopupList().then((code) => {
    expect(code).toBe(2000);
  });
});
