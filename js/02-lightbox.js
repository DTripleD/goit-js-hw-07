import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");



const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a class="gallery__item" href="${original}">
            <img
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            data-src="${original}">
        </a>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", markup);


const lightbox = new SimpleLightbox('.gallery a');

