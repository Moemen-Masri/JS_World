function specialRearrangement(nums) {
    const evenNbs = []; // Array to store all the even numbers
    const oddNbs = []; // Array to store all the odd numbers

    for (let num of nums) {
        
        if (num % 2 === 0) {
            evenNbs.push(num);
        } else {
            oddNbs.push(num);
        }
    }

    return evenNbs.concat(oddNbs);
}

const input = prompt("Enter integers: ");
const nums = input.split(" ").map(Number);
console.log("Rearranged list:", specialRearrangement(nums));