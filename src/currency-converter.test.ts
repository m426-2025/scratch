import { convert } from "./currency-converter";

describe("currency converter", () => {
  test("euros", () => expect(convert(100, "EUR")).toBe(106));
  test("dollars", () => expect(convert(100, "USD")).toBe(119));
  test("pounds", () => expect(convert(100, "GBP")).toBe(90));
  test("japanese yen should fail", () => {
    expect(() => convert(100, "JPY")).toThrow("unsupported currency");
  });
});
