const api = "http://localhost:3001";

const headers = {
  Accept: "application/json",
};

export const getSeries = () =>
  fetch(`${api}/series/`, { headers })
    .then((res) => res.json())
    .then((data) => data);

export const getData = (seriesName) =>
  fetch(`${api}/data/${seriesName}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

    export const getResults = (seriesName) =>
    fetch(`${api}/results/${seriesName}`, { headers })
      .then((res) => res.json())
      .then((data) => data);