import { takeWhile, find } from "./operators";
import { iterate } from "./generators";
import wrap from "./wrap";

export const fibonacci = wrap(
  (function*() {
    let prev = 1;
    let last = 1;

    while (true) {
      yield prev;
      const temp = prev;
      prev = last;
      last = temp + prev;
    }
  })()
);

export const primes = wrap(
  (function*() {
    const itor = iterate(n => n + 2, 3);
    yield 2;
    while (true) {
      const val = itor.next();
      const item = val.value;
      if (!find(p => item % p === 0, takeWhile(x => x * x <= item, primes))) {
        yield item;
      }
    }
  })()
);

export const yinyang = wrap(
  (function*() {
    function* yin(yin) {
      yield "@";
      function* yang(yang) {
        yield "*";
        yield* yin(yang);
      }
      yield* yang(yang);
    }
    yield* yin(yin);
  })()
);
