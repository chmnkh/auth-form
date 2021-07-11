import { validateIsRequired } from "../validateIsRequired";
import { validateIsEmail } from "../validateIsEmail";

describe("validators", () => {
  describe("validateIsRequired", () => {
    it("should return empty string if value exists", () => {
      expect(validateIsRequired("value")).toBe("");
    });

    it("should return error message if value does not exist", () => {
      expect(validateIsRequired("")).toBeTruthy();
    });
  });

  describe("validateEmail", () => {
    it("should return empty string if value is email", () => {
      expect(validateIsEmail("esd@mail.ru")).toBe("");
    });

    it("should return error message if value is not email", () => {
      expect(validateIsEmail("e@mailru.")).toBeTruthy();
      expect(validateIsEmail("e.a@mailru")).toBeTruthy();
      expect(validateIsEmail("garbage")).toBeTruthy();
      expect(validateIsEmail("")).toBeTruthy();
    });
  });
});
