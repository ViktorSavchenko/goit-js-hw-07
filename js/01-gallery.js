import { galleryItems } from "./gallery-items.js";

const ref = {
  gallery: document.querySelector(".gallery"),
};

ref.gallery.addEventListener("click", onTargetImgClick);

function onTargetImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = getUrlOriginalSizeImg(e);

  openModalOriginalSizeImg(originalUrl);
}

function getUrlOriginalSizeImg(e) {
  return e.target.dataset.source;
}

function openModalOriginalSizeImg(originalUrl) {
  document.addEventListener("keydown", onCloseOriginalSizeImgModal);

  instance = basicLightbox.create(`<img src="${originalUrl}">`);

  instance.show();
}

function onCloseOriginalSizeImgModal(e) {
  const ESCAPE = e.code === "Escape";
  if (ESCAPE) {
    document.removeEventListener("keydown", onCloseOriginalSizeImgModal);
    instance.close();
  }
}

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
          </a>
        </div>
      `;
    })
    .join("");
}

const gallaryMarkup = createGallaryMarkup(galleryItems);
ref.gallery.innerHTML = gallaryMarkup;

let instance = "";
