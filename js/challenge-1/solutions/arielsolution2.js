function foo(numsArray) {
  const product = numsArray.reduce((accum, currentEl) => {
    return accum * currentEl;
  });

  const result = numsArray.map(item => {
    return product / item;
  });

  return result.reverse();
}

console.log(foo([1, 2, 3, 6]));
//               [6,    12,   18,   36]
//                36/1  36/32 36/3  36/6
