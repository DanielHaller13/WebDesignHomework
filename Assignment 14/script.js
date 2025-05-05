const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let dx = 2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, 150, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();

  if (x + 30 > canvas.width || x - 30 < 0) {
    dx = -dx;
  }

  x += dx;
  requestAnimationFrame(draw);
}

draw();
