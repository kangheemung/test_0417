process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});

process.stdin.on('end', function () {
  const inputLines = input.trim().split('\n');
  const S = inputLines[0];
  const T = inputLines[1];

  if (S.includes(T)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
