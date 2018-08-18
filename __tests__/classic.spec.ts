import { primes, fibonacci } from "../src/classic";
import * as L from "../src";

describe("classic iterable list", () => {
  it("fibonacci", () => {
    const fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    expect([...L.take(10, fibonacci())]).toEqual(fibs);
  });

  it("primes", () => {
    const primesLst = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    expect([...L.take(10, primes())]).toEqual(primesLst);
  });
});
