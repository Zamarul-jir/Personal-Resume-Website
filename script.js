// Smooth scroll for nav links
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
}

// Fun hover interaction on Home title
const homeTitle = document.querySelector('#home h1');
homeTitle.addEventListener('mouseenter', () => {
    homeTitle.textContent = "✨ You found me! ✨";
});
homeTitle.addEventListener('mouseleave', () => {
    homeTitle.textContent = "Hey! I’m Asyifa 🌟";
});
