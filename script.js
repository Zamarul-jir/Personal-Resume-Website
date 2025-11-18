// Navigation Script
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');

    // Function to show a page with fade transition
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        // Show the selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    // Add click event to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Show home page by default
    showPage('home');

    // Skills Animation: Set circular progress dynamically
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const percentage = skill.querySelector('.circular-progress').getAttribute('data-percentage');
        const circle = skill.querySelector('.progress-circle');
        circle.style.setProperty('--percentage', `${percentage * 3.6}deg`); // 360deg = 100%
    });

    // Optional: Add more interactivity, e.g., random floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        shape.style.left = Math.random() * 100 + '%';
        shape.style.animationDuration = (Math.random() * 4 + 4) + 's'; // Random duration
    });
});
