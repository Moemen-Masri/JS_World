let x = parseInt(prompt("Enter x:"));
for (let i = 1; i <= x; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += j + ' ';
    }
    console.log(line);
}