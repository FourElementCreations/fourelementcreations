const body = document.querySelector('body');
const content = document.getElementById('content');
const canv = document.getElementById('canvas');
const logo = document.getElementById('logo');

function pageTransition() {
  body.style.backgroundColor = 'black';
  canv.style.opacity = 0;
  

  setTimeout(() => {
    canv.style.display = 'none';
    logo.style.opacity = 0;
    // logo.style.display = 'none';
  }, 1000); // Adjust the delay to match the animation duration

  setTimeout(() => {
    content.classList.remove('hidden');
    canv.style.display = 'none';
    logo.style.opacity = 0;
    // logo.style.display = 'none';
  }, 2000); // Adjust the delay to match the animation duration
}

logo.addEventListener('click', pageTransition);
