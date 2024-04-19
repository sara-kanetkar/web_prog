const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
"It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Life is what happens when you're busy making other plans. - John Lennon"
];
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    let quoteElement = document.querySelector(".quote");
    let writerElement = document.querySelector(".writer");
    quote = seperate(quotes[randomIndex]);
    quoteElement.innerHTML = quote[0];
    writerElement.innerHTML = quote[1];
}
function seperate(quote) {

    seperationIndex = quote.indexOf("-");
    content = quote.substring(0,seperationIndex).trim();
    writer = quote.substring(seperationIndex+1).trim();

    return [content, writer];
    

}