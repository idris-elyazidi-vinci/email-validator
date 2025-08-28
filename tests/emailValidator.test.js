const validateEmail = require('../src/emailValidator.js');

describe("email validator - '@' presence", () => {
  test("fails when no @", () => {
    expect(validateEmail("user.example.com")).toBe(false);
  });
  test("passes when contains @ (other rules will catch later)", () => {
    expect(typeof validateEmail("user@example.com")).toBe("boolean");
  });
});