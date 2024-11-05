const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Make the canvas fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Extended character set for more authentic matrix look
const matrixChars = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

// Array for drops
const drops = []
for (let x = 0; x < columns; x++) {
    drops[x] = 1; 
}

// Different shades of green for variety
const greens = [
    '#0F0',
    '#00FF00',
    '#22FF22',
    '#44FF44',
    '#66FF66',
    '#88FF88'
];

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        
        // Random green shade
        ctx.fillStyle = greens[Math.floor(Math.random() * greens.length)];
        ctx.font = `${fontSize}px monospace`;
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop or move it down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Faster animation rate (60fps)
setInterval(drawMatrix, 16);

// Responsive canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



// Example for highlighting card on hover (if needed)
$('.card').hover(
    function() {
        $(this).css('background-color', '#444444'); // Change color on hover
    }, 
    function() {
        $(this).css('background-color', '#333333'); // Revert color
    }
);



