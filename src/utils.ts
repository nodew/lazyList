export function head<T>(items: Iterable<T>): T {
  for (let item of items) {
    return item;
  }
}

export function size<T>(items: Iterable<T>): number {
  let count = 0;
  for (let item of items) {
    count++;
  }
  return count;
}
