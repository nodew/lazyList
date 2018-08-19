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
