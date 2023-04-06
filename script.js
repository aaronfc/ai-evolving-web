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

const userArt = [
  {
    title: "Sunset Dream",
    creator: "Alice Wonderland",
    imageURL: "https://example.com/images/sunset_dream.jpg",
  },
  {
    title: "Urban Jungle",
    creator: "Bob Smith",
    imageURL: "https://example.com/images/urban_jungle.jpg",
  },
  {
    title: "Ocean Serenity",
    creator: "Charlie Brown",
    imageURL: "https://example.com/images/ocean_serenity.jpg",
  },
];

function generateRandomArt() {
  const canvas = document.getElementById("artCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const shapeCount = Math.floor(Math.random() * 10) + 5;

  for (let i = 0; i < shapeCount; i++) {
    const randomShape = Math.floor(Math.random() * 3);
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.fillStyle = randomColor;

    switch (randomShape) {
      case 0:
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 50 + 10;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case 1:
        const width = Math.random() * 100 + 10;
        const height = Math.random() * 100 + 10;
        const xPos = Math.random() * (canvas.width - width);
        const yPos = Math.random() * (canvas.height - height);
        ctx.fillRect(xPos, yPos, width, height);
        break;
      case 2:
        const sideLength = Math.random() * 100 + 10;
        const x1 = Math.random() * (canvas.width - sideLength);
        const y1 = Math.random() * (canvas.height - sideLength);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 + sideLength / 2, y1 - sideLength / 2);
        ctx.lineTo(x1 + sideLength, y1);
        ctx.closePath();
        ctx.fill();
        break;
    }
  }
}
