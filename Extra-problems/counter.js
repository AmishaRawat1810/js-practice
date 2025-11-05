const counter = function (num, increment, decrement, getCount) {
  const result = `
  Increment : ${increment(num)}
  Decrement : ${decrement(num)}
  Count     : ${getCount(num)}
  `;
  return result;
}

console.log(`Counter:
  ${counter(4,
  function (n) { return n++; },
  function (n) { return n--; },
  function (n) { return n; })
  }
`);
