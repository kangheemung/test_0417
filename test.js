process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const S = lines[0];
    const [index, char] = lines[1].split(' ');
    const i = parseInt(index, 10);
    const modifiedString = S.substring(0, i - 1) + char + S.substring(i);
    console.log(modifiedString);

});