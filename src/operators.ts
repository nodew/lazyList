import { lift } from "./utils";

export function* map<T, U>(fn: (value: T) => U, items: Iterable<T>) {
  for (let item of items) {
    yield fn(item);
  }
}

export function* filter<T>(
  predicate: (value: T) => boolean,
  items: Iterable<T>
) {
  for (let item of items) {
    if (predicate(item)) {
      yield item;
    }
  }
}

export function* take<T>(n: number, items: Iterable<T>) {
  let i = 0;
  if (n < 1) return;

  for (let item of items) {
    yield item;
    i++;
    if (i >= n) {
      return;
    }
  }
}

export function* takeWhile<T>(
  predicate: (value: T) => boolean,
  items: Iterable<T>
) {
  for (let item of items) {
    if (predicate(item)) {
      yield item;
    } else {
      return;
    }
  }
}

export function* drop<T>(n: number, items: Iterable<T>) {
  const lst = lift(items);
  let i = 0;
  while (i < n) {
    lst.next();
    i++;
  }
  yield* lst;
}

export function head<T>(items: Iterable<T>): T {
  const xs = lift(items);
  return xs.next().value;
}

export function* tail<T>(items: Iterable<T>) {
  const lst = lift(items);
  lst.next();
  yield* lst;
}

export function* zip<T, G>(
  seqA: Iterable<T>,
  seqB: Iterable<G>
): IterableIterator<[T, G]> {
  const itorA = lift(seqA);
  const itorB = lift(seqB);
  let valA = itorA.next();
  let valB = itorB.next();
  while (!valA.done || !valB.done) {
    yield [valA.value, valB.value];
    valA = itorA.next();
    valB = itorB.next();
  }
}

export function* zipWith<T, G, R>(
  fn: (a: T, b: G) => R,
  seqA: Iterable<T>,
  seqB: Iterable<G>
): IterableIterator<R> {
  const itorA = lift(seqA);
  const itorB = lift(seqB);
  let valA = itorA.next();
  let valB = itorB.next();
  while (!valA.done || !valB.done) {
    yield fn(valA.value, valB.value);
    valA = itorA.next();
    valB = itorB.next();
  }
}

export function* append<T>(...series: Iterable<T>[]): IterableIterator<T> {
  for (let s of series) {
    yield* s;
  }
}

export function find<T>(predicate: (T) => boolean, items: Iterable<T>): T {
  for (let item of items) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

export function foldl<T, G>(
  f: (acc: G, prev: T) => G,
  initial: G,
  items: Iterable<T>
): G {
  let _acc = initial;
  for (const item of items) {
    _acc = f(_acc, item);
  }
  return _acc;
}

export function* scanl<T, G>(
  f: (acc: G, prev: T) => G,
  inital: G,
  items: Iterable<T>
): Iterable<G> {
  let _acc = inital;
  for (const item of items) {
    _acc = f(_acc, item);
    yield _acc;
  }
}
