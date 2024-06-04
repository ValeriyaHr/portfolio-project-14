const btnLink = document.querySelector('.hero-btn-link');
const buttonLeft = document.querySelector('.button-left-fn');

if (window.matchMedia('(min-width: 320px)').matches) {
    btnLink.addEventListener('mouseover', function() {
  buttonLeft.style.backgroundColor = '#00B06899';
  buttonLeft.style.transform = 'translateX(-38%)'; 
  buttonLeft.style.width ='200px';
  btnLink.style.zIndex = '10'; 
});

btnLink.addEventListener('mouseout', function() {
  buttonLeft.style.backgroundColor = 'rgba(0, 176, 104, 0.2)';
  buttonLeft.style.transform = 'translateX(0)'; 
  btnLink.style.zIndex = '5'; 
});
}
