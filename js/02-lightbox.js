import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

const items = galleryItems.map((item) => {
  return `<a class = "gallery__item" href="${item.original}"><img class = "gallery__image" src="${item.preview}" alt="${item.description}"></img></a>`;
});
galleryRef.insertAdjacentHTML("afterbegin", items.join(""));
console.log(galleryRef);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
