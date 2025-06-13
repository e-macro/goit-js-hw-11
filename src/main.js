import findImages from "./js/pixabay-api";
import createGallery, { clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery")

form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    const q = event.target.elements['search-text'].value;
    clearGallery()
    showLoader()
    findImages(q)
        .then(response => {
            if (!response.hits.length) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    closeOnClick: true,
                    position: "topRight",
                })
                return;
            }
            createGallery(response.hits);
        })
        .catch(error => iziToast.error({
            message: `${error}`
        }))
        .finally(() => hideLoader())

})

