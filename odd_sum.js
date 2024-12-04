let n = parseInt(prompt('Enter the desirable number: '));
let sum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log('The sum of all odd numbers is:', sum);