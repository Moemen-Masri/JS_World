const x = parseInt(prompt('Enter a number x: '));
let a = 0;
let b = 1;

for (let i = 0; i < x; i++) {
    process.stdout.write(a.toString());
    if (i < x - 1) {
        process.stdout.write(',');
    }
    [a, b] = [b, a + b];
}