import getRefs from './refs';

export { renderGallery };

const refs = getRefs();

function renderGallery(images) {
  const markup = images
    .map(image => {
      const {
        id,
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
        <div class="grid-item" id="${id}">
        <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
       </div>
      `;
    })
    .join('');

  refs.gridSizer.insertAdjacentHTML('beforeend', markup);
}
