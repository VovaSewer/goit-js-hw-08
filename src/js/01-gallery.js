
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');
const galleryMark = createGalleryMark(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMark);
const lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay:250});

function createGalleryMark (galleryItems) {
    return galleryItems.map(({preview, original,  description}) => {
    return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;

    }).join('');
}

console.log(galleryItems);