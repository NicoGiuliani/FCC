function binaryAgent(str) {
  str = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    let sum = 0;
    for (let j = str[i].length - 1; j > -1; j--) {
      sum += parseInt(str[i][j]) * Math.pow(2, (str[i].length - 1 - j));
    }
    str[i] = String.fromCharCode(sum);
  }
  return str.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");