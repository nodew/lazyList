import { head, wrap } from "./index";
import { tail, filter, take } from "./operators";
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
    const cachedItor = wrap(lift(xs));
    const item = head(cachedItor);
    yield item;
    yield* sieve(filter(x => x % item !== 0, tail(cachedItor)));
  };
  yield* sieve(iterate(n => n + 1, 2));
}
