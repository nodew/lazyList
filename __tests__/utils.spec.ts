import * as L from "../src";

describe("utils", () => {
  it("head", () => {
    expect(L.head(L.repeat(10))).toBe(10);
  });

  it("size", () => {
    expect(L.size<number>(L.replicate<number>(1, 10))).toEqual(10);
  });
});
