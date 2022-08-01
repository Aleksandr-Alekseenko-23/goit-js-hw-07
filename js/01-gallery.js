import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const items = galleryItems.map((item) => {
  return `<div class="gallery__item"> <a class = "gallery__link" href="${item.original}"><img class = "gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></img></a></div>`;
});
galleryRef.insertAdjacentHTML("afterbegin", items.join(""));
console.log(galleryRef);

galleryRef.addEventListener("click", selectFoto);

function selectFoto(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      console.log(event.key);
      instance.close();
    }
  });
}
