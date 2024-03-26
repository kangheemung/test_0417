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
    const data = input.trim().split('\n');
    const [H, W] = data[0].split(' ').map(Number);
    let result = '';

    for (let i = 1; i <= H; i++) {
        const pixels = data[i].split(' ').map(Number);
        const binaryPixels = pixels.map(pixel => pixel >= 128 ? 1 : 0);
        result += binaryPixels.join(' ') + '\n';
    }

    process.stdout.write(result);
});