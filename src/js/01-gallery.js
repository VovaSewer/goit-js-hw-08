
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryMark = createGalleryMark(galleryItems);


function createGalleryMark (galleryItems) {
    return galleryItems.map(({preview, original,  description}) => {
    return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;

    }).join('');
}
galleryList.insertAdjacentHTML('beforeend', galleryMark);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay:250});