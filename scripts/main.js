// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // offset for header
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (for small screens)
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
document.querySelector('header .container').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Button Hover Effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#555';  // Darken on hover
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#333';  // Return to original color
    });
});

// Form Validation (for Contact Form)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert("Please fill in all fields.");
        } else {
            alert("Your message has been sent!");
        }
    });
}