const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});

document.querySelector('.shop-all').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#products').scrollIntoView({ 
        behavior: 'smooth'
    });
});

document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#welcome-again').scrollIntoView({ 
        behavior: 'smooth'
    });
});