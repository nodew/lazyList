function wrap<T>(iterator: IterableIterator<T>): Iterable<T> {
  const sequence = [];
  let index = -1;

  const next = () => {
    index++;
    if (sequence.length > index) {
      return {
        value: sequence[index],
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
    [Symbol.iterator]: function() {
      index = -1;
      return {
        next
      };
    }
  };
}

export default wrap;
