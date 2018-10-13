import { take } from "./operators";

export function* repeat<T>(item: T) {
  const isIterable = typeof item[Symbol.iterator] === 'function';

  if (isIterable) {
    while (true) {
      yield [...item];
    }
  } else {
    while (true) {
      yield item;
    }
  }
}

export function* cycle<T>(items: Iterable<T>) {
  while (true) {
    yield* [...items];
  }
}

export function* iterate<T>(fn: (value: T) => T, initial: T) {
  let val = initial;
  while (true) {
    yield val;
    val = fn(val);
  }
}

export function* range(start: number, end = Infinity, step = 1) {
  while (start <= end) {
    yield start;
    start += step;
  }
}

export function* random() {
  while (true) {
    yield Math.random();
  }
}

export function replicate<T>(item: T, count: number) {
  return take(count, repeat<T>(item));
}
