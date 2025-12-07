// Simple particle burst on cta-button hover
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    createParticles(button);
  });
});

function createParticles(element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 3;
    const size = 5 + Math.random() * 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    let dx = Math.cos(angle) * speed;
    let dy = Math.sin(angle) * speed;

    function animate() {
      const left = parseFloat(particle.style.left);
      const top = parseFloat(particle.style.top);
      particle.style.left = `${left + dx}px`;
      particle.style.top = `${top + dy}px`;
      particle.style.opacity = (parseFloat(particle.style.opacity) - 0.02).toString();

      if (parseFloat(particle.style.opacity) > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    }

    particle.style.opacity = '1';
    animate();
  }
}
