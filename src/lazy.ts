import wrap from "./wrap";
import * as G from "./generators";

export function repeat_<T>(item: T) {
  return wrap(G.repeat(item));
}

export function cycle_<T>(items: Iterable<T>) {
  return wrap(G.cycle(items));
}

export function iterate_<T>(fn: (value: T) => T, initial: T) {
  return wrap(G.iterate(fn, initial));
}

export function range_(start: number, end = Infinity, step = 1) {
  return wrap(G.range(start, end, step));
}

export function replicate_<T>(item: T, count: number) {
  return wrap(G.replicate(item, count));
}

export function map_<T, U>(fn: (value: T) => U, items: Iterable<T>) {
  return wrap(G.map(fn, items));
}

export function filter_<T>(
  predicate: (value: T) => boolean,
  items: Iterable<T>
) {
  return wrap(G.filter(predicate, items));
}

export function take_<T>(n: number, items: Iterable<T>) {
  return wrap(G.take(n, items));
}

export function takeWhile_<T>(
  predicate: (value: T) => boolean,
  items: Iterable<T>
) {
  return wrap(G.takeWhile(predicate, items));
}

export function drop_<T>(n: number, items: Iterable<T>) {
  return wrap(G.drop(n, items));
}

export function tail_<T>(items: Iterable<T>) {
  return wrap(G.tail(items));
}
