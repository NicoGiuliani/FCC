function spinalCase(str) {
  const chars = str.split('');
  let temp = [];
  let i, j;

  for (i = 0, j = 1; j < chars.length; j++) {
    if (chars[j] !== chars[j].toLowerCase()) {
      temp.push(chars.slice(i, j).join(''));
      i = j;
    }
  }

  temp.push(chars.slice(i).join(''));
  str = temp.join(' ').split(/[\s_-]/).filter(n => n != '').join('-').toLowerCase();
  
  return str;
}