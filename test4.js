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
  const uppercaseS = S.toUpperCase();
  console.log(uppercaseS);
});