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

