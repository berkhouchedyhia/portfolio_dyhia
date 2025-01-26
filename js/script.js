document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // Toggle menu
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Scroll sections active link
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let offset = section.offsetTop - 100;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // Sticky Navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', scrollPosition > 100);

        // Remove toggle icon and navbar when clicked on a link
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    // Scroll Reveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    }).reveal('.home-content, .heading', { origin: 'top' });

    // Typed.js for multiple text
    new Typed('.multiple-text', {
        strings: ['Chef de projet SI junior', 'Responsable de la Maintenance Applicative (TMA)','Business Analyst', 'Consultante en Transformation Digitale', 'Consultante en BI', 'Analyste des risques informatiques', 'Responsable de la gouvernance SI', 'Product Owner SI'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
