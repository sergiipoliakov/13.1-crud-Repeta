const BASE_URL = 'http://localhost:3000';

function removeBook(bookId) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
removeBook(32);
// removeBook(14);
