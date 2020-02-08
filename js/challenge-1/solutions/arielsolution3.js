function foo(numsArray) {
  // assume numsArray is always sorted

  let result;

  // handle multiple zero elements in array
  const [a, b] = numsArray;
  if (a + b === 0) {
    return Array(numsArray.length).fill(0);
  }

  // handle zero element in array
  if (a === 0) {
    result = Array(numsArray.length - 1).fill(0); // create new array fill with 0
    result.push(numsArray[numsArray.length - 1] ** 2); // push last element**2 at end of array;
    return result;
  }

  const product = numsArray.reduce((accum, currentEl) => {
    if (accum !== 0 && currentEl !== 0) {
      return accum * currentEl;
    }
    return currentEl;
  });

  return numsArray
    .map(item => {
      return product / item;
    })
    .reverse();
}

console.clear();
console.log(foo([0, 2, 3, 6])); // [0,0,0,36]
