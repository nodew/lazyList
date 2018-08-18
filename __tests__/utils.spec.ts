import * as L from "../src";

describe("utils", () => {
  it("head", () => {
    expect(L.head([1, 2, 3, 4])).toBe(1);
  });

  it("size", () => {
    expect(L.size<number>(L.replicate<number>(1, 10))).toEqual(10);
  });

  it("lift", () => {
    expect(L.lift([1, 2, 3, 4]).next()).toEqual({ done: false, value: 1 });
  });
});
