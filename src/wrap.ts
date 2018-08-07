function wrap<T>(iterator: IterableIterator<T>): Iterable<T> {
  const sequence = [];

  const next = i => {
    if (sequence.length > i) {
      return {
        value: sequence[i],
        done: false
      };
    }
    const { value, done } = iterator.next();

    if (!done) {
      sequence.push(value);
    }
    return {
      value,
      done
    };
  };

  return {
    [Symbol.iterator]: () => {
      let i = -1;

      return {
        next: function() {
          i++;
          return next(i);
        }
      };
    }
  };
}

export default wrap;
