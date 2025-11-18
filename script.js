// Smooth scrolling for navigation with a fun bounce effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Add a subtle bounce to the target section
        setTimeout(() => {
            target.style.animation = 'bounceIn 0.5s ease-out';
        }, 500);
    });
});

// Create floating particles for ambient fun
const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.width = particle.style.height = Math.random() * 10 + 5 + 'px';
        particlesContainer.appendChild(particle);
    }
};

// Animate skill bars on scroll with interactive hover boosts
const animateSkills = () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percentage = bar.dataset.percentage;
        const fill = bar.querySelector('.progress-fill');
        const isVisible = bar.getBoundingClientRect().top < window.innerHeight - 100;
        if (isVisible && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            fill.style.width = percentage + '%';
            fill.style.setProperty('--current-width', percentage + '%');
        }
    });
};

// Hover on skill bars for tips and boosts
document.querySelectorAll('.skill-bar').forEach(bar => {
    const tip = bar.dataset.tip;
    const fill = bar.querySelector('.progress-fill');
    bar.addEventListener('mouseenter', () => {
        // Show tip as a fun alert or tooltip (using a simple alert for now; can upgrade to a custom tooltip)
        alert(tip); // Replace with a custom tooltip if preferred
        // Boost the fill temporarily
        const currentWidth = parseFloat(fill.style.width) || 0;
        fill.style.width = Math.min(currentWidth + 10, 100) + '%';
    });
    bar.addEventListener('mouseleave', () => {
        // Reset to original after a delay
        setTimeout(() => {
            fill.style.width = bar.dataset.percentage + '%';
        }, 1000);
    });
});

// Playful text changes on home section hover
const homeSection = document.getElementById('home');
const introText = document.getElementById('intro-text');
const originalText = introText.textContent;
const funTexts = [
    "Coder by day, Clash Royale champion by night. Let's make this scroll epic!",
    "Warning: Scrolling may cause uncontrollable fun!",
    "Psst... Hover over skills for secret boosts!",
    "Built with code, caffeine, and a dash of chaos."
];
homeSection.addEventListener('mouseenter', () => {
    introText.textContent = funTexts[Math.floor(Math.random() * funTexts.length)];
});
homeSection.addEventListener('mouseleave', () => {
    introText.textContent = originalText;
});

// Secret click on profile photo for a mini animation burst
const profileImg = document.getElementById('profile-click');
profileImg.addEventListener('click', () => {
    profileImg.style.animation = 'spin 0.5s ease-in-out';
    setTimeout(() => {
        profileImg.style.animation = '';
        alert("🎉 Boom! You're awesome. Keep scrolling!");
    }, 500);
});

// Fun hover effects for gallery images (wiggle and glow)
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1) rotate(5deg)';
        img.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.6)';
        img.style.filter = 'brightness(1.2) saturate(1.3)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotate(0deg)';
        img.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        img.style.filter = 'brightness(1) saturate(1)';
    });
});

// Footer hover surprise
const footerText = document.getElementById('footer-text');
const footerOriginal = footerText.textContent;
footerText.addEventListener('mouseenter', () => {
    footerText.textContent = "✨ Surprise! You found the fun zone. Now go build something epic!";
});
footerText.addEventListener('mouseleave', () => {
    footerText.textContent = footerOriginal;
});

// Button pulse on hover (already in CSS, but add click feedback)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.animation = 'pulse 0.3s ease-in-out';
        setTimeout(() => btn.style.animation = '', 300);
    });
});

// Initialize everything on load
window.addEventListener('load', () => {
    createParticles();
    animateSkills();
});

// Trigger skill animations on scroll
window.addEventListener('scroll', animateSkills);

// Add some random card animations on page load for extra flair
document.querySelectorAll('.card').forEach((card, index) => {
    setTimeout(() => {
        card.style.animation = 'bounceIn 0.8s ease-out';
    }, index * 200);
});
