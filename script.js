// Navigation Script
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');

    // Function to show a page
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

    // Skills Animation (on hover)
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            const fill = skill.querySelector('.progress-fill');
            fill.style.width = '100%'; // Animate to full on hover
        });
        skill.addEventListener('mouseleave', () => {
            const fill = skill.querySelector('.progress-fill');
            // Reset to original width (from inline style)
            const originalWidth = fill.style.width;
            fill.style.width = originalWidth;
        });
    });
});
