// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


export default function createGallery(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="image-box">
        <img src="${webformatURL}" alt="${tags}" data-source:"${largeImageURL}" width="300">
        <ul class="image-stats">
            <li class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${likes}</span>
            </li>
            <li class="image-stat">
                <span class="label">Views</span>
                <span class="value">${views}</span>
            </li>
            <li class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${comments}</span>
            </li>
            <li class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${downloads}</span>
            </li>
        </ul>
    </li>`).join("");
};

export function createLoader(arr) {
    return arr.map(() => `
    <li class="image-box">
        <span class="loader"></span>
        <ul class="image-stats">
            <li class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${likes}</span>
            </li>
            <li class="image-stat">
                <span class="label">Views</span>
                <span class="value">${views}</span>
            </li>
            <li class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${comments}</span>
            </li>
            <li class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${downloads}</span>
            </li>
        </ul>
    </li>`).join("");
}

new SimpleLightbox('.gallery a', {captionDelay: 250, captionPosition: 'bottom', captionsData: 'alt'});

