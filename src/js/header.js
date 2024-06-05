const hamburgerBtn = document.getElementById('menu-open_btn');
const mobileMenu = document.getElementById('mobile-menu');
const closedMobileMenuBtn = document.getElementById('close-mobile-menu');
const headerMenu = document.querySelectorAll('.mob-nav-list li');
const modal = document.querySelector('.modal')

hamburgerBtn.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateY(0)';
    body.classList.toggle('noScroll');
});

closedMobileMenuBtn.addEventListener('click', function() {
    mobileMenu.style.transform = 'translateY(-100%)';
    body.classList.toggle('noScroll');
});

headerMenu.forEach(item => {
    item.addEventListener('click', function() {
        mobileMenu.style.transform = 'translateY(-100%)';
        body.classList.toggle('noScroll');
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
const checkbox = document.querySelector('.check-input');
const body = document.body;
body.classList.add('light-mode');
checkbox.checked = false;
localStorage.removeItem('theme');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark-mode') {
        checkbox.checked = true;
    }
}
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
}
);
const applyThemeToMobileMenu = () => {
    if (body.classList.contains('dark-mode')) {
        mobileMenu.classList.add('dark-mode');
        mobileMenu.classList.remove('light-mode');
    } else {
        mobileMenu.classList.add('light-mode');
        mobileMenu.classList.remove('dark-mode');
    }
};
applyThemeToMobileMenu();
const applyThemeToModal = () => {
    if (body.classList.contains('dark-mode')) {
        modal.classList.add('dark-mode');
        modal.classList.remove('light-mode'); 
    } else {
        modal.classList.add('light-mode');
        modal.classList.remove('dark-mode');
}
}

window.addEventListener('resize', () => {
    if (window.outerWidth >= 768) {
        mobileMenu.style.transform = 'translateY(-100%)';
        body.classList.remove('noScroll');
    }
})