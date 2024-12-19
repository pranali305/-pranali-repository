// script.js
const quotes = [
    '"Believe in yourself!"',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"The harder you work for something, the greater you’ll feel when you achieve it."',
    '"Don’t watch the clock; do what it does. Keep going." - Sam Levenson',
    '"Dream big and dare to fail." - Norman Vaughan'
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote-btn");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
