const BASE_URL = 'http://localhost:3000';
const newBook = {
  title: 'тестовая книга',
  author: 'Я',
  genres: ['JS'],
  rating: 10,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books/`, options)
    .then(res => res.json())
    .then(console.log);
}

addBook(newBook).then(book => {
  console.log('Пришел ответ от бекенда можно рисовать');
  console.log(book);
});
addBook({
  title: 'тестовая книгаhtml',
  author: 'Я',
  genres: ['html'],
  rating: 10,
});
