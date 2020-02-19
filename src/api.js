const APIkey = "api_key=f000d6bc66440080b3cae6d19f1b0175";
const url = "https://api.themoviedb.org/3/movie/";

function getNowPlaying() {
  return fetch(`${url}now_playing?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

function getMostPopular() {
  return fetch(`${url}popular?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

function getTopRated() {
  return fetch(`${url}top_rated?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

function getDetail(id) {
  return fetch(`${url}${id}?${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => data);
}

export default {
  getNowPlaying,
  getMostPopular,
  getTopRated,
  getDetail
}