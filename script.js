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

function setDailyColor() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  const hue = Math.floor((dayOfYear / 365) * 360);
  const dailyColor = `hsl(${hue}, 50%, 60%)`;

  // Display the color
  const colorElement = document.querySelector(".color-of-the-day");
  colorElement.textContent = dailyColor;
  colorElement.style.backgroundColor = dailyColor;
}

// Wrap the setDailyColor function call inside this event listener
document.addEventListener("DOMContentLoaded", () => {
  setDailyColor();
});

// Add this function below the setDailyColor() function
function copyColorToClipboard() {
  const colorElement = document.querySelector(".color-of-the-day");
  const color = colorElement.textContent;
  const textarea = document.createElement("textarea");
  textarea.textContent = color;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert(`Color ${color} has been copied to your clipboard!`);
}
