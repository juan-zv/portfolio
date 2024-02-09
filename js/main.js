document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.burger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Select Juan Zurita and change its font-style every 1.25 secs
var myName = document.getElementById("my-name");
var fontStyles = ["rubik-doodle", "bebas-neue", "lobster", "caveat"];
var i = 0;

setInterval(function () {
    myName.classList.remove(fontStyles[i % fontStyles.length]);
    i++;
    myName.classList.add(fontStyles[i % fontStyles.length]);
}, 1250);