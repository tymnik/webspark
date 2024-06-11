import svgSprite from '../img/sprite.svg';
import { cards } from './cards';

export function initializeGallery() {
  const gallery = document.getElementById('gallery');
  const previewBtn = document.getElementById('previewBtn');
  const rowsBtn = document.getElementById('rowsBtn');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  let currentFilter = 'preview';
  let loadedCards = 8;

  function renderCards() {
    const numberOfCards = currentFilter === 'preview' ? 8 : 9;
    const visibleCards = cards.slice(0, Math.min(loadedCards, cards.length));

    gallery.innerHTML = visibleCards
      .map(
        card => `
      <div class="card">
        <img src="${card.img}" alt="Image">
       <div class="card-info">
          <div class="details-today">
            <h3>Today</h3>
            <div class="details-stats">
              <p>
                <svg class="like-icon"><use href="${svgSprite}${card.likeIcon}"></use></svg> ${card.likes}
              </p>
              <p>
                <svg class="comment-icon"><use href="${svgSprite}${card.commentIcon}"></use></svg> ${card.comments}
              </p>
            </div>
          </div>
          <div class="details-date">
            <h3>${card.date}</h3>
            <div class="details-date-stats">
              <p>
                <svg class="like-icon"><use href="${svgSprite}${card.likeIcon}"></use></svg> ${card.likes2}
              </p>
              <p>
                <svg class="comment-icon"><use href="${svgSprite}${card.commentIcon}"></use></svg> ${card.comments2}
              </p>
            </div>
          </div>
          <div class="upload">
            <p>Image upload <span class="upload-date">${card.uploadDate}</span></p>
          </div>
       </div>
      </div>
    `
      )
      .join('');
  }

  previewBtn.addEventListener('click', () => {
    currentFilter = 'preview';
    gallery.classList.remove('rows');
    gallery.classList.add('preview');
    loadedCards = 8;
    renderCards();
  });

  rowsBtn.addEventListener('click', () => {
    currentFilter = 'rows';
    gallery.classList.remove('preview');
    gallery.classList.add('rows');
    loadedCards = 9;
    renderCards();
  });

  loadMoreBtn.addEventListener('click', () => {
    loadedCards += currentFilter === 'preview' ? 8 : 9;
    renderCards();
  });

  renderCards();
}
