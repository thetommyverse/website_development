/* ================= Hero Background Particle Canvas ================= */
const canvas = document.getElementById ('hero-canvas');
const ctx = canvas.getContext ('2d');
let width, height, particles;
const symbols = [
  '{ }',
  'Σ',
  'π',
  '</>',
  '∫',
  'ƒ(x)',
  'λ',
  '0101',
  '∞',
  'Δ',
  'if()',
];

let mouse = {x: null, y: null};
window.addEventListener ('mousemove', e => {
  const rect = canvas.getBoundingClientRect ();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

window.addEventListener ('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

function initCanvas () {
  width = canvas.width = window.innerWidth;
  height = canvas.height =
    document.getElementById ('home').offsetHeight || window.innerHeight;
  particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push ({
      x: Math.random () * width,
      y: Math.random () * height,
      baseVx: (Math.random () - 0.5) * 0.5,
      baseVy: Math.random () * -0.5 - 0.2,
      vx: 0,
      vy: 0,
      size: Math.random () * 20 + 15,
      symbol: symbols[Math.floor (Math.random () * symbols.length)],
      alpha: Math.random () * 0.2 + 0.05,
    });
    particles[i].vx = particles[i].baseVx;
    particles[i].vy = particles[i].baseVy;
  }
}

function animateCanvas () {
  if (isHomeVisible) {
    ctx.clearRect (0, 0, width, height);

    particles.forEach (p => {
      if (mouse.x != null && mouse.y != null) {
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let distance = Math.sqrt (dx * dx + dy * dy);

        if (distance < 120) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (120 - distance) / 120;
          p.vx += forceDirectionX * force * 0.5;
          p.vy += forceDirectionY * force * 0.5;
        }
      }

      p.vx += (p.baseVx - p.vx) * 0.05;
      p.vy += (p.baseVy - p.vy) * 0.05;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -50) p.x = width + 50;
      if (p.x > width + 50) p.x = -50;
      if (p.y < -50) p.y = height + 50;
      if (p.y > height + 50) p.y = -50;

      ctx.font = `800 ${p.size}px Poppins`;
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.fillText (p.symbol, p.x, p.y);
    });
  }
  requestAnimationFrame (animateCanvas);
}

// Attach listener and initialize canvas on load
window.addEventListener ('resize', initCanvas);
document.addEventListener ('DOMContentLoaded', () => {
  initCanvas ();
  animateCanvas ();
});
