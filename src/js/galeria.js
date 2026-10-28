import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';

const figures = document.querySelectorAll('.gallery figure');

for (let index = 0; index < figures.length; index += 1) {
  const figure = figures[index];
  const image = figure.querySelector('img');
  const link = document.createElement('a');

  // El src de la imatge ja conté la ruta resolta per Parcel.
  link.href = image.src;
  link.setAttribute('aria-label', 'Amplia la fotografia. ' + image.alt);
  link.setAttribute('data-caption', figure.querySelector('figcaption').textContent);
  figure.insertBefore(link, image);
  link.appendChild(image);
}

baguetteBox.run('.gallery', { buttons: true, animation: false });

const previous = document.getElementById('previous-button');
const next = document.getElementById('next-button');
const close = document.getElementById('close-button');
const overlay = document.getElementById('baguetteBox-overlay');

previous.setAttribute('aria-label', 'Anterior');
next.setAttribute('aria-label', 'Següent');
close.setAttribute('aria-label', 'Tanca');
overlay.setAttribute('aria-modal', 'true');

// Tab es manté entre els controls mentre la vista ampliada és oberta.
overlay.addEventListener('keydown', (event) => {
  if (event.key !== 'Tab') return;

  if (event.shiftKey && document.activeElement === previous) {
    event.preventDefault();
    close.focus();
  } else if (!event.shiftKey && document.activeElement === close) {
    event.preventDefault();
    previous.focus();
  }
});

document.querySelector('.gallery-help').hidden = false;
