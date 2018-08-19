import { filter } from "./operators";
import { iterate } from "./generators";
import { lift } from "./utils";

export function* fibonacci() {
  let prev = 1;
  let last = 1;

  while (true) {
    yield prev;
    const temp = prev;
    prev = last;
    last = temp + prev;
  }
}

export function* primes() {
  const sieve = function*(xs: Iterable<number>): Iterable<number> {
    const itor = lift(xs);
    const val = itor.next();
    const item = val.value;
    yield item;
    yield* sieve(filter(x => x % item !== 0, itor));
  };
  yield* sieve(iterate(n => n + 1, 2));
}
