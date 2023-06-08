const timeline = document.querySelector('.timeline');
const addCardBtn = document.querySelector('#add-card');

// Add new card
addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.setAttribute('data-id', timeline.children.length + 1);
  newCard.innerHTML = `
    <h2>Card ${timeline.children.length + 1}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `;
  timeline.appendChild(newCard);
});

// Make cards draggable and sortable
let draggedCard = null;

timeline.addEventListener('mousedown', e => {
  if (e.target.classList.contains('card')) {
    draggedCard = e.target;
    draggedCard.style.cursor = 'grabbing';
  }
});

timeline.addEventListener('mouseup', e => {
  if (draggedCard) {
    draggedCard.style.cursor = 'grab';
    draggedCard = null;
  }
});

timeline
