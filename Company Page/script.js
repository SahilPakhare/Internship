// Optional JavaScript code for interactivity

// Example: Add a "Scroll to top" button

const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Scroll to top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.backgroundColor = '#333';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.padding = '10px 20px';
scrollToTopButton.style.zIndex = '1000';
scrollToTopButton.style.display = 'none';

document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});