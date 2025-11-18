document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-group .btn');
  const contentSections = document.querySelectorAll('.content-section');
  const introText = document.getElementById('intro-text');

  // Hide all content sections and intro text
  function hideAll() {
    contentSections.forEach(section => section.classList.remove('active'));
    introText.style.display = 'none';
  }

  // Show chosen section by id or intro by special id "intro"
  function showSection(sectionId) {
    hideAll();
    if (sectionId === 'intro') {
      introText.style.display = 'block';
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.classList.add('active');
    }
  }

  // On button click, show correct section
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.getAttribute('data-section');
      showSection(section);
    });
  });

  // Initially show intro text
  showSection('intro');
});
