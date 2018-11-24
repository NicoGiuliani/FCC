function smallestCommons(arr) {
  let multiple = Math.max(...arr);
  let start = Math.min(...arr);

  let between = [];
  for (let i = start; i < multiple; i++) between.push(i);

  for (let i = 0; i < between.length; i++) {
    if (multiple % between[i] != 0) {
      for (let j = 2;; j++) {
        if ((multiple * j) % between[i] == 0) {
          multiple *= j;
          break;
        }
      }
    }
  }

  return multiple;
}

smallestCommons([1,13]);