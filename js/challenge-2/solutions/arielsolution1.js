function countChars(str) {
  let lowercase = str.toLowerCase();

  let obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    w: 0,
    u: 0,
    v: 0,
    x: 0,
    y: 0,
    z: 0
  };

  for (let i = 0; i < lowercase.length; i++) {
    if (obj.hasOwnProperty(lowercase[i])) {
      obj[lowercase[i]]++;
    }
  }

  return Object.values(obj);
}

console.clear();

console.log(countChars("A string of characters"));
