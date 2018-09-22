function rot13(str) { 
  const alphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
  	let index = alphabet.indexOf(str[i]);
  	str[i] = (index === -1) ? str[i] : alphabet[(index + 13) % 26];
  }
  return str.join('');
}

console.log(rot13("SERR PBQR PNZC"));