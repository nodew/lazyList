# lazyList

A lazy list implementation with generator and iterator

## install
```bash
npm i @nodew/lazylist
```

## source code intro
```bash
tree src ->

src
├── index.ts
├── generators.ts
├── operators.ts
├── wrap.ts
├── reusable.ts
├── utils.ts
└── classic.ts
```

### generators.ts
some basic generators such as repeat、cycle、range and so on.

### operators.ts
operators on series, map/filter/take/drop/zip...

### wrap.ts
helper function for cache evaluated values, while native iterator only do `next` by `next` until done is true, you can't re-call it from begin at next time.

### reusable.ts
wrap operators and generators up, the return value is reusable.

### classic.ts
classic infinite list implementations, such as fibonacci and primes.

