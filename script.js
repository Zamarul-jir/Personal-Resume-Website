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
            fill.style.width = '0%'; // Start from 0
            setTimeout(() => {
                fill.style.transition = 'width 2s ease-in-out';
                fill.style.width = percentage + '%';
            }, 100);
        }
    });
};

// Hover on skill bars for tips and boosts
document.querySelectorAll('.skill-bar').forEach(bar => {
    const tip = bar.dataset.tip;
    const fill = bar.querySelector('.progress-fill');
    bar.addEventListener('mouseenter', () => {
        alert(tip); // Fun alert for tips
        const currentWidth = parseFloat(fill.style.width) || 0;
        fill.style.width = Math.min(currentWidth + 10, 100) + '%';
    });
    bar.addEventListener('mouseleave', () => {
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

// Fun quote carousel on home
const funQuote = document.getElementById('fun-quote');
const quotes = [
    "Fun Fact: I once coded a website that made my cat dance! 🐱💃",
    "Did you know? My Photoshop edits are award-worthy!",
    "Pro Tip: Always deploy the Hog in Clash Royale!"
];
let quoteIndex = 0;
setInterval(() => {
    funQuote.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}, 5000);

// Badge hover effects on home
document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1) rotate(5deg)';
    });
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotate(0deg)';
    });
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

// Instagram-like gallery hover effects (already handled in CSS, but add click feedback)
document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', () => {
        alert('❤️ Liked! (In a real Instagram, this would save to your feed.)');
    });
});

// Mini Game: Clash Royale Battle (Fixed for proper movement within game area)
let score = 0;
let gameActive = false;
let enemyInterval;
const enemy = document.getElementById('enemy');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-game');
const restartBtn = document.getElementById('restart-game');
const gameArea = document.getElementById('game-area');

const startGame = () => {
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
    gameActive = true;
    startBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    enemy.style.display = 'block';
    moveEnemy();
    enemyInterval = setInterval(moveEnemy, 2000); // Move every 2 seconds
    setTimeout(endGame, 30000); // Game lasts 30 seconds
};

const moveEnemy = () => {
    if (!gameActive) return;
    const gameRect = gameArea.getBoundingClientRect();
    const x = Math.random() * (gameRect.width - 50) + gameRect.left;
    const y = Math.random() * (gameRect.height - 50) + gameRect.top;
    enemy.style.left = x + 'px';
    enemy.style.top = y + 'px';
};

const hitEnemy = () => {
    if (!gameActive) return;
    score += 10;
    scoreDisplay.textContent = 'Score: ' + score;
    enemy.style.animation = 'hit 0.3s ease';
    setTimeout(() => enemy.style.animation = '', 300);
    moveEnemy(); // Move immediately after hit
};

const endGame = () => {
    gameActive = false;
    clearInterval(enemyInterval);
    enemy.style.display = 'none';
    restartBtn.style.display = 'inline-block';
    alert(`Battle over! Final Score: ${score}. Great job, warrior!`);
};

enemy.addEventListener('click', hitEnemy);
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
