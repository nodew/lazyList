import wrap from "./wrap";
import * as g from "./generators";
import * as op from "./operators";

export function repeat_<T>(item: T) {
  return wrap(g.repeat(item));
}

export function cycle_<T>(items: Iterable<T>) {
  return wrap(g.cycle(items));
}

export function iterate_<T>(fn: (value: T) => T, initial: T) {
  return wrap(g.iterate(fn, initial));
}

export function range_(start: number, end = Infinity, step = 1) {
  return wrap(g.range(start, end, step));
}

export function replicate_<T>(item: T, count: number) {
  return wrap(g.replicate(item, count));
}

export function map_<T, U>(fn: (value: T) => U, items: Iterable<T>) {
  return wrap(op.map(fn, items));
}

export function filter_<T>(
  predicate: (value: T) => boolean,
  items: Iterable<T>
) {
  return wrap(op.filter(predicate, items));
}

export function take_<T>(n: number, items: Iterable<T>) {
  return wrap(op.take(n, items));
}

export function takeWhile_<T>(
  predicate: (value: T) => boolean,
  items: Iterable<T>
) {
  return wrap(op.takeWhile(predicate, items));
}

export function drop_<T>(n: number, items: Iterable<T>) {
  return wrap(op.drop(n, items));
}

export function tail_<T>(items: Iterable<T>) {
  return wrap(op.tail(items));
}

export function zip_<T, G>(seqA: Iterable<T>, seqB: Iterable<G>) {
  return wrap(op.zip(seqA, seqB));
}

export function zipWith_<T, G, R>(
  fn: (a: T, b: G) => R,
  seqA: Iterable<T>,
  seqB: Iterable<G>
) {
  return wrap(op.zipWith(fn, seqA, seqB));
}
