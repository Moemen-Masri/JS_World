function rebuildSentence(words, lengths) {
    let i = 0;
    for (let word of words) {
        if (lengths[i] > 0) {
            let temp = lengths[i]; 
            process.stdout.write(word.substring(0, temp) + " ");
            i++;
        }
    }
}

const words = ["the", "sky", "okay"];
const lengths = [3, 2, 4];
rebuildSentence(words, lengths);