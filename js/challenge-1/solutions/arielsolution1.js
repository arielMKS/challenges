function foo(numsArray) {
  let newArray = [];
  for (let i = numsArray.length - 1; i >= 0; i--) {
    let temp = 1;
    for (let j = 0; j < numsArray.length; j++) {
      if (numsArray[i] !== numsArray[j]) {
        temp *= numsArray[j];
      }
    }
    newArray.push(temp);
  }
  return newArray;
}
console.log(foo([1, 2, 3, 6]));
