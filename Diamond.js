const h = parseInt(prompt("Please enter diamond's height:"));

for (let i = 0; i < h; i++) {
    console.log(" ".repeat(h - i) + "*".repeat(i * 2 + 1));
}
for (let i = h - 2; i >= 0; i--) {
    console.log(" ".repeat(h - i) + "*".repeat(i * 2 + 1));
}