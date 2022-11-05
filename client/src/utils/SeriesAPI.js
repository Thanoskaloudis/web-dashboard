const api = "http://localhost:3001";

const headers = {
  Accept: "application/json",
};

export const getSeries = () =>
  fetch(`${api}/series/`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getData = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const getResults = (query, maxResults) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);