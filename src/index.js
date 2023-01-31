import './sass/main.scss';
import fetchImages from './js/api-servise';
import getRefs from './js/refs';
import { renderGallery } from './js/renderGallery';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const refs = getRefs();
let query = 'dog';
let page = 1;
let perPage = 10;

console.log(fetchImages());

const masonryInstance = new Masonry('#gallery', {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  transitionDuration: '0.3s',
});

imagesLoaded('#gallery').on('progress', function () {
  masonryInstance.layout();
});

function getRenderCards() {
  fetchImages(query, page, perPage).then(images => {
    renderGallery(images.hits);

    imagesLoaded('#gallery').on('progress', function () {
      masonryInstance.layout(images.hits);
    });
  });
}

getRenderCards();
