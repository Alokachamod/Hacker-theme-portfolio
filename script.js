// matrix.js

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Make the canvas fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Only 0 and 1 for binary code pattern
const matrixChars = "01";
const fontSize = 16;
const columns = canvas.width / fontSize; // number of columns for the rain

// An array of the y positions of each column
const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height);
}

// Draw the characters
function drawMatrix() {
    // Set the background color with transparency to create the trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color and font
    ctx.fillStyle = '#0F0'; // green text for binary pattern
    ctx.font = `${fontSize}px monospace`;

    // Loop over the columns
    for (let i = 0; i < drops.length; i++) {
        // Select a random character ('0' or '1')
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));

        // Draw the character at the current drop position (x, y)
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset the drop back to the top or move it down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Update the animation every 33 milliseconds (~30 frames per second)
setInterval(drawMatrix, 33);

// Adjust canvas size if the window is resized
window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
