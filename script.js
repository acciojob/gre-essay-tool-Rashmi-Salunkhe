//your code here
// Function to calculate the word count
function calculateWordCount(text) {
    // Trim the text and split by spaces, ignoring empty strings
    const words = text.trim().split(/\s+/);
    // If there are no words, return 0
    return text.trim().length === 0 ? 0 : words.length;
}

// Function to update the word count in real-time
document.getElementById("evaluatedText").addEventListener("input", function () {
    const text = this.value;
    const wordCount = calculateWordCount(text);
    document.getElementById("wordCount").textContent = wordCount;
});
