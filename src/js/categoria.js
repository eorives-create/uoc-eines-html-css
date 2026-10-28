const input = document.getElementById('nom-dolc');
const cards = document.querySelectorAll('[data-nom]');
const status = document.getElementById('resultats');

document.getElementById('filtre').hidden = false;

input.addEventListener('input', () => {
  const query = input.value.trim().toLowerCase();
  let total = 0;

  for (let index = 0; index < cards.length; index += 1) {
    const card = cards[index];
    const matches = card.getAttribute('data-nom').indexOf(query) !== -1;
    card.hidden = !matches;
    if (matches) total += 1;
  }

  if (total === 0) {
    status.textContent = 'No s’ha trobat cap dolç. Prova amb dorayaki o daifuku.';
  } else if (total === 1) {
    status.textContent = 'Es mostra 1 dolç.';
  } else {
    status.textContent = 'Es mostren ' + total + ' dolços.';
  }
});
