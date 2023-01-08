import { galleryItems } from "./gallery-items.js";

const ref = {
  gallery: document.querySelector(".gallery"),
};

function createGallaryElementMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
    `;
    })
    .join("");
}

const gallaryMarkup = createGallaryElementMarkup(galleryItems);

ref.gallery.innerHTML = gallaryMarkup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
