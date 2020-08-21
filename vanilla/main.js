const API_URL = 'https://nature-image-api.now.sh/search?q=';
const form = document.querySelector('form');
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('.images');

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);
function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;
  console.log(searchTerm);
  search(searchTerm).then(displayImages);
}
function search(searchTerm) {
  const url = `${API_URL}${searchTerm}}`;
  loadingImage.style.display = '';
  imageSection.innerHTML = '';
  return fetch(url).then(response => response.json())
  .then(result => {
    return result.images;
  });
}
function displayImages(images) {
  images.forEach(image => {
    const imageElement = document.createElement('img');
    imageElement.src = image.image;
    imageSection.appendChild(imageElement);
  })
  loadingImage.style.display = 'none';
}
