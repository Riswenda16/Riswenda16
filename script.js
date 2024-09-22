const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

let angle = 0;

function drawFlower(x, y, size) {
    ctx.fillStyle = 'pink';
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(x, y, size, angle, angle + Math.PI / 5);
        ctx.arc(x, y, size, angle + Math.PI / 5, angle + 2 * Math.PI / 5);
        ctx.fill();
        angle += Math.PI / 5;
    }
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlower(canvas.width / 2, canvas.height / 2, 50 + 10 * Math.sin(angle));
    angle += 0.1;
    requestAnimationFrame(animate);
}

animate();
