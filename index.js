const saveBtn = document.getElementById("save-dp");
const generateBtn = document.getElementById("generate-dp");
const submit = document.getElementsByClassName("generate-dp");

// Set canvas properties
const canvas = document.getElementById("profile-picture");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

// Generate random pattern
function generatePattern() {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Generate random colors
  const colors = [getRandomColor(), getRandomColor(), getRandomColor()];

  // Draw pattern
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      // Get random color from colors array
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Set fill color
      ctx.fillStyle = color;

      // Draw rectangle
      ctx.fillRect(x, y, 10, 10);
    }
  }
}

// Returns a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

window.onload = generatePattern;

// Generate initial pattern
generateBtn.addEventListener("click", generatePattern);

// Save button click event
saveBtn.addEventListener("click", function () {
  // Convert canvas image to data URL
  const dataURL = canvas.toDataURL("image/png");

  // Create an anchor element
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "User-DP.png";

  // Simulate click on the anchor element
  link.click();
});

submit.addEventListener("click", function () {
  // Convert canvas image to data URL
  const dataURL = canvas.toDataURL("image/png");

  // Create an anchor element
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "User-DP.png";

  // Simulate click on the anchor element
  link.click();
});
