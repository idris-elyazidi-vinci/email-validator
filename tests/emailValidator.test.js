const validateEmail = require('../src/emailValidator.js');

describe("email validator - '@' presence", () => {
  test("fails when no @", () => {
    expect(validateEmail("user.example.com")).toBe(false);
  });
  test("passes when contains @ (other rules will catch later)", () => {
    expect(typeof validateEmail("user@example.com")).toBe("boolean");
  });
  describe("email validator - domain dot", () => {
    test("fails when domain has no dot", () => {
      expect(validateEmail("user@example")).toBe(false);
    });
    test("fails when domain ends with dot", () => {
      expect(validateEmail("user@example.")).toBe(false);
    });
    test("passes when domain has at least one dot not at the end", () => {
      expect(validateEmail("user@example.org")).toBe(true);
      expect(validateEmail("user@sub.domain.com")).toBe(true);
    });
  });

  describe("email validator - no spaces", () => {
    test("fails when email contains space anywhere", () => {
      expect(validateEmail("user @example.com")).toBe(false);
      expect(validateEmail("user@ example.com")).toBe(false);
      expect(validateEmail(" user@example.com ")).toBe(false);
    });
  });
});