import * as L from "../src";

describe("resuable iterators", () => {
  it("repeat", () => {
    const repeat10 = L.repeat_(10);
    const a = Array.from(L.take(100, repeat10));
    const b = Array.from(L.take(100, repeat10));
    expect(a).toEqual(b);
  });

  it("cycle", () => {
    const cycle = L.cycle_([1, 2, 3]);
    const a = Array.from(L.take(100, cycle));
    const b = Array.from(L.take(100, cycle));
    expect(a).toEqual(b);
  });

  it("iterate", () => {
    const iterator = L.iterate_(item => item + 1, 0);
    const a = Array.from(L.take(100, iterator));
    const b = Array.from(L.take(100, iterator));
    expect(a).toEqual(b);
  });

  it("range", () => {
    const range = L.range_(1);
    const a = Array.from(L.take(100, range));
    const b = Array.from(L.take(100, range));
    expect(a).toEqual(b);
  });

  it("replicate", () => {
    const replicate = L.replicate_(10, 5);
    expect(Array.from(replicate)).toEqual([...replicate]);
  });

  it("map", () => {
    const lst = L.map_<number, number>(item => item * 2, L.range(1, 5));
    expect(Array.from(lst)).toEqual([...lst]);
  });

  it("filter", () => {
    const lst = L.filter_<number>(item => item % 2 === 0, L.range(1, 5));
    expect(Array.from(lst)).toEqual([...lst]);
  });

  it("take", () => {
    const lst = L.take_<number>(5, L.repeat(5));
    expect(L.size(lst)).toEqual([...lst].length);
  });

  it("takeWhile", () => {
    const lst = L.takeWhile_<number>(item => item < 3, L.range(1, 5));
    expect(Array.from(lst)).toEqual([...lst]);
  });

  it("drop", () => {
    const lst = L.drop_<number>(2, L.range(1, 5));
    expect(Array.from(lst)).toEqual([...lst]);
  });

  it("tail", () => {
    const lst = L.tail_<number>(L.range(1, 5));
    expect(Array.from(lst)).toEqual([...lst]);
  });
});
