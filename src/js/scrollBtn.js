const mybutton = document.getElementById("scrollBtn");

window.addEventListener("scroll", scrollFunction)


function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35 ) {
    mybutton.style.display ="flex";
  } else {
    mybutton.style.display = "none";
  }
}