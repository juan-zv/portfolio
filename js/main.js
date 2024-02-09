document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.burger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });