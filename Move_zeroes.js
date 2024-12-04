function moveZeros(numbers) {
    let count = 0; // Pointer to track the position for the next non-zero element
    for (let i = 0; i < numbers.length; i++) { // Loop that iterates over each index i in the numbers array
        if (numbers[i] !== 0) { 
            [numbers[i], numbers[count]] = [numbers[count], numbers[i]];
            count++; 
        }
    }
}

let numbers = [1, 2, 0, 4, 3, 0, 5, 0];
moveZeros(numbers);
numbers.forEach(num => {
    process.stdout.write(num + " ");
});