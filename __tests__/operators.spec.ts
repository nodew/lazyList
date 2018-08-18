import * as L from "../src";

describe("operators", () => {
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

  it("zip", () => {
    const seqA = [1, 2, 3, 4];
    const seqB = [1, 1, 1, 1];
    expect([...L.zip(seqA, seqB)]).toEqual([[1, 1], [2, 1], [3, 1], [4, 1]]);
  });

  it("zipWith", () => {
    const seqA = [1, 2, 3, 4];
    const seqB = [1, 1, 1, 1];
    expect([...L.zipWith((a, b) => a + b, seqA, seqB)]).toEqual([2, 3, 4, 5]);
  });
});
