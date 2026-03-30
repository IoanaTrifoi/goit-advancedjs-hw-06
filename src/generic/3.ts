// 2.3: Merge Objects
function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

export {};
