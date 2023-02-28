import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const mainGallery = document.querySelector(".gallery");

const galleryItem = document.createElement("img");

console.log(galleryItems);


galleryItem.src = galleryItems.preview;
galleryItem.alt = galleryItems.description;

mainGallery.append(galleryItem.src);