const quotes = [
  {
    text: "The purpose of art is washing the dust of daily life off our souls.",
    author: "Pablo Picasso",
  },
  { text: "Creativity takes courage.", author: "Henri Matisse" },
  {
    text: "Art is not what you see, but what you make others see.",
    author: "Edgar Degas",
  },
  {
    text: "Art is the lie that enables us to realize the truth.",
    author: "Pablo Picasso",
  },
  { text: "Great art picks up where nature ends.", author: "Marc Chagall" },
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.querySelector(".quote-text").innerText = quote.text;
  document.querySelector(".quote-author").innerText = `- ${quote.author}`;
  document.querySelector(".quote-text").style.display = "block";
  document.querySelector(".quote-author").style.display = "block";
}
