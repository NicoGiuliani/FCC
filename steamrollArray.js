function steamrollArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      arr = arr.flat();
      i = -1;
    }
  }
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);