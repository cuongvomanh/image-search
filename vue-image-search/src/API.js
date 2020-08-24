const API_URL = 'https://nature-image-api.now.sh/search?q=';

export default {
  search(searchTerm) {
  const url = `${API_URL}${searchTerm}}`;
  return fetch(url).then(response => response.json())
  .then(result => {
    return result.images;
  });

  }
}
