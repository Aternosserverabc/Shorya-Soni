// ===== Navbar Scroll Shadow =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('shadow', window.scrollY > 4);
});

// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  mobileMenu.style.display =
    mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// ===== Particle Canvas =====
const particleCanvas = document.getElementById("particles");
const pctx = particleCanvas.getContext("2d");

function resizeCanvas() {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let particles = Array.from({ length: Math.floor(window.innerWidth / 15) }, () => ({
  x: Math.random() * particleCanvas.width,
  y: Math.random() * particleCanvas.height,
  r: Math.random() * 2,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function drawParticles() {
  pctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  pctx.fillStyle = "white";
  particles.forEach(p => {
    pctx.beginPath();
    pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    pctx.fill();

    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > particleCanvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > particleCanvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ===== Fade Animations (fade-in & fade-up) =====
const fadeElements = document.querySelectorAll('.fade-in, .fade-up');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

// ===== Stars Background =====
const starCanvas = document.getElementById("stars");
const sctx = starCanvas.getContext("2d");

let stars = Array.from({ length: Math.floor(window.innerWidth / 10) }, () => ({
  x: Math.random() * starCanvas.width,
  y: Math.random() * starCanvas.height,
  radius: Math.random() * 1.2,
  alpha: Math.random(),
  speed: Math.random() * 0.02
}));

function animateStars() {
  sctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  stars.forEach(s => {
    sctx.beginPath();
    sctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    sctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
    sctx.fill();

    s.alpha += s.speed;
    if (s.alpha <= 0 || s.alpha >= 1) s.speed *= -1;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 200);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
