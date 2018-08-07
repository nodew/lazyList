import * as L from "../src";

describe("iterable list generators", () => {
  it("repeat", () => {
    const sum = Array.from(L.take(100, L.repeat(10))).reduce((a, b) => {
      a += b;
      return a;
    }, 0);
    expect(sum).toBe(1000);
  });

  it("cycle", () => {
    const lst = Array.from(L.take(6, L.cycle([1, 2, 3])));
    expect(lst.slice(0, 3)).toEqual(lst.slice(3, 6));
  });

  it("iterate", () => {
    const lst = Array.from(L.take(10, L.iterate(item => item + 1, 0)));
    expect(lst).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("range", () => {
    expect(Array.from(L.range(0, 9, 2))).toEqual([0, 2, 4, 6, 8]);
  });

  it("replicate", () => {
    expect(Array.from(L.replicate(10, 5))).toEqual([10, 10, 10, 10, 10]);
  });

  it("map", () => {
    expect(
      Array.from(L.map<number, number>(item => item * 2, L.range(1, 5)))
    ).toEqual([2, 4, 6, 8, 10]);
  });

  it("filter", () => {
    expect(
      Array.from(L.filter<number>(item => item % 2 === 0, L.range(1, 5)))
    ).toEqual([2, 4]);
  });

  it("take", () => {
    expect(Array.from(L.take<number>(0, L.repeat(5)))).toEqual([]);
    expect(L.size(L.take<number>(5, L.repeat(5)))).toEqual(5);
  });

  it("takeWhile", () => {
    expect(
      Array.from(L.takeWhile<number>(item => item < 3, L.range(1, 5)))
    ).toEqual([1, 2]);
  });

  it("drop", () => {
    expect(Array.from(L.drop<number>(2, L.range(1, 5)))).toEqual([3, 4, 5]);
  });

  it("tail", () => {
    expect(Array.from(L.tail<number>(L.range(1, 5)))).toEqual([2, 3, 4, 5]);
  });
});
