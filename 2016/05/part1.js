const fs = require('fs');
const input = fs.readFileSync('./input', 'utf8').trim();
const crypto = require('crypto');

const pin = findPassword(input);
console.log(`PIN: ${pin}`);

function findPassword(input) {
    let [index, hash, password] = [-1, '', ''];
    while (password.length < 8) {
      hash = md5(`${input}${++index}`);
      if (hash.substr(0, 5) === '00000') {
        password += hash.substr(5, 1);
      }
    }
    return password;
}

function md5(input) {
  return crypto.createHash('md5').update(input).digest('hex');
}
