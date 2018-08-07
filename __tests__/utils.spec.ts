import * as L from "../src";

describe("utils", () => {
  it("head", () => {
    expect(L.head(L.repeat(10))).toBe(10);
  });

  it("tail", () => {
    expect(Array.from(L.tail([1, 2, 3]))).toEqual([2, 3]);
  });
});
