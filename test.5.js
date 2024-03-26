process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});

process.stdin.on('end', function () {
  const S = input.trim();
  let reversedS = '';
  
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i].toUpperCase()) {
      reversedS += S[i].toLowerCase();
    } else {
      reversedS += S[i].toUpperCase();
    }
  }
    console.log(reversedS);
});
