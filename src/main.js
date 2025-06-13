import findImages from "./js/pixabay-api";
import createMarkup, { createLoader } from "./js/render-functions";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const image = document.querySelector(".image-box")
const gallery = document.querySelector(".gallery")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const q = event.target.elements['search-text'].value;
    gallery.innerHTML(createLoader())
    findImages()
        .then(response => {
            if (!response.data) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    closeOnClick: true,
                    position: "topRight",
                })
            }
            gallery.innerHTML(createMarkup(response.data));
        })
        .catch(error => iziToast.error({
            message: `${error}`
        }))

})

