function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    const keys = Object.keys(collection[i]); 
    let x = collection[i][pre];
    if (x == null || x == 0 || x == '' || 
       (typeof x == "number" && isNaN(parseInt(x)))) return false;
  }
  return true;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");