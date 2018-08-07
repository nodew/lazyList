export function* repeat<T>(item: T) {
  while (true) {
    yield item;
  }
}

export function* cycle<T>(items: Iterable<T>) {
  const lst = Array.from(items);
  while (true) {
    for (let item of lst) {
      yield item;
    }
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

export function replicate<T>(item: T, count: number) {
  return take(count, repeat<T>(item));
}

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
  let i = 0;
  for (let item of items) {
    if (i >= n) {
      yield item;
    }
    i++;
  }
}

export function* tail<T>(items: Iterable<T>) {
  let visited = false;
  for (let item of items) {
    if (visited) {
      yield item;
    } else {
      visited = true;
    }
  }
}
