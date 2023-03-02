import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
            <img
            class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}" 
            data-src="${item.original}">
        </a>
    </div>`
  )
  .join("");

console.log(markup);

galleryList.insertAdjacentHTML("beforeend", markup);

const smalImg = document.querySelectorAll(".gallery__image");

galleryList.addEventListener("click", (event) => {
  smalImg.forEach(() => {
    if (event.target.nodeName !== "IMG") {
        return;
      }
    event.target.src = event.target.dataset.src;
  });
});


// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()
// }


const open =  basicLightbox.create(`<img src="${event.target.dataset.src}" alt="" width="800" height="600">`);
open.show();