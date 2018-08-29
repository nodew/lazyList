export function size<T>(items: Iterable<T>): number {
  let count = 0;
  for (let _ of items) {
    count++;
  }
  return count;
}

export function* lift<T>(items: Iterable<T>): IterableIterator<T> {
  yield* items;
}
