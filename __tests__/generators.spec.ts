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
    expect(Array.from(L.replicate([8, [10, 12]], 5))).toEqual([
      [8, [10, 12]],
      [8, [10, 12]],
      [8, [10, 12]],
      [8, [10, 12]],
      [8, [10, 12]]
    ]);
    expect(Array.from(L.replicate([1], 2))).toEqual([
      [1],
      [1]
    ]);
    expect(Array.from(L.replicate(7, 2))).toEqual([7, 7]);
    expect(Array.from(L.replicate({ name: '1', age: '2' }, 2))).toEqual([
      { name: '1', age: '2' },
      { name: '1', age: '2' }
    ]);
  });

  it("random", () => {
    const matches = [...L.take(10, L.random())]
      .map(item => item > 0 && item < 1)
      .find(item => !item);
    expect(matches).toBeUndefined();
  });
});
