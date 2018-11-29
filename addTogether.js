function addTogether() {
  const args = arguments;
  for (let i in args) {
    if (typeof args[i] != "number") return undefined;
  }

  if (args.length == 2) return args[0] + args[1];
  else {
    return (n) => {
      return (typeof n == "number") ? args[0] + n : undefined;
    }
  }
}

addTogether(2,[3]);