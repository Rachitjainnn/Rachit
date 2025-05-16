document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const details = button.previousElementSibling;
      const isVisible = details.style.display === 'block';
      details.style.display = isVisible ? 'none' : 'block';
      button.textContent = isVisible ? 'Show More' : 'Show Less';
    });
  });

