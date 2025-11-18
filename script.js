// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skills on scroll
const animateSkills = () => {
    const skills = document.querySelectorAll('.radial-progress');
    skills.forEach(skill => {
        const percentage = skill.dataset.percentage;
        const fill = skill.querySelector('.fill');
        const isVisible = skill.getBoundingClientRect().top < window.innerHeight - 100;
        if (isVisible && !skill.classList.contains('animated')) {
            skill.classList.add('animated');
            fill.style.transform = rotate(${percentage * 3.6}deg); // 360deg / 100 = 3.6
        }
    });
};

// Playful text change on home section hover
const homeSection = document.getElementById('home');
const introText = homeSection.querySelector('p');
const originalText = introText.textContent;
homeSection.addEventListener('mouseenter', () => {
    introText.textContent = "Psst... Scroll down for more fun! 🎉";
});
homeSection.addEventListener('mouseleave', () => {
    introText.textContent = originalText;
});

// Trigger animations on scroll
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Fun hover effect for gallery images (slight rotation)
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05) rotate(2deg)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotate(0deg)';
    });
});
