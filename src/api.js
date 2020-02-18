const APIkey = "api_key=f000d6bc66440080b3cae6d19f1b0175";
const url = "https://api.themoviedb.org/3";

function getNowPlaying() {
  return fetch(`${url}/movie/now_playing?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

function getMostPopular() {
  return fetch(`${url}/movie/popular?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

function getTopRated() {
  return fetch(`${url}/movie/top_rated?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

export default {
  getNowPlaying,
  getMostPopular,
  getTopRated
}