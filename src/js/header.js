const hamburgerBtn = document.getElementById('menu-open_btn');
const mobileMenu = document.getElementById('mobile-menu');
const closedMobileMenuBtn = document.getElementById('close-mobile-menu');
const headerMenu = document.querySelectorAll('.mob-nav-list li');

hamburgerBtn.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateY(0)';
});

closedMobileMenuBtn.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateY(-100%)';
});

headerMenu.forEach(item => {
    item.addEventListener('click', function() {
        mobileMenu.style.transform = 'translateY(-100%)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if (event.target.matches('a[href^="#"]')) {
            event.preventDefault();
            const id = event.target.getAttribute('href');
            const targetElement = document.querySelector(id);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
