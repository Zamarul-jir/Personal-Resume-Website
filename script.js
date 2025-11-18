// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Animate skill bars on scroll
const skills = document.querySelectorAll('.skill-progress');

function animateSkills() {
  skills.forEach(skill => {
    const progress = skill.getAttribute('data-progress');
    const rect = skill.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      skill.style.width = progress;
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
