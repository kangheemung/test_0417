{"changed":true,"filter":false,"title":"test2.js","tooltip":"/test2.js","value":"process.stdin.resume();\nprocess.stdin.setEncoding('utf8');\n// 自分の得意な言語で\n// Let's チャレンジ！！\nvar lines = [];\nvar reader = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\nlet input = '';\nprocess.stdin.on('data', function (chunk) {\n    input += chunk;\n});\n\nprocess.stdin.on('end', function () {\n    const data = input.trim().split('\\n');\n    const [H, W] = data[0].split(' ').map(Number);\n    let result = '';\n\n    for (let i = 1; i <= H; i++) {\n        const pixels = data[i].split(' ').map(Number);\n        const binaryPixels = pixels.map(pixel => pixel >= 128 ? 1 : 0);\n        result += binaryPixels.join(' ') + '\\n';\n    }\n\n    process.stdout.write(result);\n});","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":26,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","let input = '';","process.stdin.on('data', function (chunk) {","    input += chunk;","});","","process.stdin.on('end', function () {","    const data = input.trim().split('\\n');","    const [H, W] = data[0].split(' ').map(Number);","    let result = '';","","    for (let i = 1; i <= H; i++) {","        const pixels = data[i].split(' ').map(Number);","        const binaryPixels = pixels.map(pixel => pixel >= 128 ? 1 : 0);","        result += binaryPixels.join(' ') + '\\n';","    }","","    process.stdout.write(result);","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":57.5,"scrollleft":0,"selection":{"start":{"row":13,"column":0},"end":{"row":13,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":2,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1711438930891}