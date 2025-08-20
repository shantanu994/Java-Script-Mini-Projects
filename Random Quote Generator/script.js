
const quotes = {
    all: [
        "The best way to get started is to quit talking and begin doing.",
        "Don't let yesterday take up too much of today.",
        "It's not whether you get knocked down, it's whether you get up.",
        "If you are working on something exciting, it will keep you motivated.",
        "Success is not in what you have, but who you are.",
        "The harder you work for something, the greater you'll feel when you achieve it."
    ],
    motivational: [
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there.",
        "Your time is limited, don't waste it living someone else's life.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts."
    ],
    inspirational: [
        "In the middle of difficulty lies opportunity.",
        "The only impossible journey is the one you never begin.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "The mind is everything. What you think you become.",
        "Life is 10% what happens to you and 90% how you react to it."
    ],
    life: [
        "Life is what happens when you're busy making other plans.",
        "The purpose of our lives is to be happy.",
        "Get busy living or get busy dying.",
        "Life is really simple, but we insist on making it complicated.",
        "The good life is one inspired by love and guided by knowledge."
    ]
};

// Get DOM elements
const quoteText = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");
const categorySelect = document.getElementById("category-select");

// Initialize variables
let currentCategory = "all";
let quoteCount = 0;

// Function to get random quote from selected category
function getRandomQuote(category = currentCategory) {
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    return categoryQuotes[randomIndex];
}

// Function to update quote with animation
function updateQuote() {
    // Add fade out effect
    quoteText.style.opacity = "0";
    quoteText.style.transform = "translateY(-10px)";
    
    setTimeout(() => {
        // Get new quote
        const newQuote = getRandomQuote();
        quoteText.textContent = newQuote;
        
        // Update counter
        quoteCount++;
        updateQuoteCounter();
        
        // Add fade in effect
        quoteText.style.opacity = "1";
        quoteText.style.transform = "translateY(0)";
    }, 200);
}

// Function to update quote counter
function updateQuoteCounter() {
    // Create counter element if it doesn't exist
    let counterElement = document.getElementById("quote-counter");
    if (!counterElement) {
        counterElement = document.createElement("div");
        counterElement.id = "quote-counter";
        counterElement.style.fontSize = "0.9rem";
        counterElement.style.color = "#666";
        counterElement.style.marginTop = "10px";
        document.querySelector(".container").appendChild(counterElement);
    }
}

// Function to handle category change
function handleCategoryChange() {
    currentCategory = categorySelect.value;
    updateQuote();
}

// Add event listeners
newQuoteBtn.addEventListener("click", updateQuote);
categorySelect.addEventListener("change", handleCategoryChange);

// Initialize the page
document.addEventListener("DOMContentLoaded", function() {
    // Set initial quote
    updateQuote();
    
    // Add some styling to the category section
    const categorySection = document.querySelector(".category-section");
    if (categorySection) {
        categorySection.style.marginBottom = "20px";
        categorySection.style.textAlign = "center";
    }
    
    // Style the select element
    if (categorySelect) {
        categorySelect.style.padding = "8px";
        categorySelect.style.borderRadius = "5px";
        categorySelect.style.border = "1px solid #ccc";
        categorySelect.style.fontSize = "14px";
        categorySelect.style.marginLeft = "10px";
    }
});

// Add hover effect to button
newQuoteBtn.addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.2s ease";
});

newQuoteBtn.addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
});
