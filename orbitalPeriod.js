function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let i, a;

  for (i in arr) {
    a = arr[i]["avgAlt"] + earthRadius;
    arr[i]["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt(a * a * a / GM));
    delete arr[i]["avgAlt"];
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);