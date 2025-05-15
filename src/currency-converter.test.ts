import { convert } from "./currency-converter";

describe("currency converter", () => {
  test("euros", () => expect(convert(100, "EUR")).toBeCloseTo(94));
  test("dollars", () => expect(convert(100, "USD")).toBeCloseTo(84));
  test("pounds", () => expect(convert(100, "GBP")).toBeCloseTo(111));
  test("japanese yen should fail", () => {
    expect(() => convert(100, "JPY")).toThrow("unsupported currency");
  });
});
