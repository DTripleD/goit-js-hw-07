import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

// Робимо розмітку
const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            data-src="${original}">
        </a>
    </div>`
  )
  .join("");

// Додаємо розмітку до HTML
galleryList.insertAdjacentHTML("beforeend", markup);

// Функція натиску на картинку та її збільшення + підміна src на data-src
function zoomImg(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(`
    <img src="${evt.target.dataset.src}" width="800" height="600">
    `);

  modal.show();

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.code === "Escape") {
        modal.close();
      }
    },
    { once: true }
  );
}

// Присвоювання події при кліку
galleryList.addEventListener("click", zoomImg);
