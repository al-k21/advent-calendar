const fs = require('fs');
const input = fs.readFileSync('./input', 'utf8').trim();
const crypto = require('crypto');

const pin = findPassword(input);
console.log(`PIN: ${pin}`);

function findPassword (input) {
  let [index, hash] = [-1, ''];
  let password = [null, null, null, null, null, null, null, null];
  while (password.filter(char => char === null).length > 0) {
    hash = md5(`${input}${++index}`);
    if (hash.substr(0, 5) === '00000') {
      const [pos, char] = [hash.substr(5, 1), hash.substr(6,1)];
      if (pos >= 0 && pos <= 7 && password[pos] === null) {
        password[pos] = char;
        console.log(hash, pos, char);
      }
    }
  }
  return password.join('');
}

function md5 (input) {
  return crypto.createHash('md5').update(input).digest('hex');
}
