const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter x: ', (input) => {
    const x = parseInt(input);
    for (let i = 1; i <= x; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += j + ' ';
        }
        console.log(line);
    }
    rl.close();
});