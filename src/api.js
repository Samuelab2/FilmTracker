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

function getDetail(id) {
  return fetch(`${url}/movie/${id}?${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => data);
}

function getCredits(id) {
  return fetch(`${url}/movie/${id}/credits?${APIkey}`)
    .then(response => response.json())
    .then(data => data);
}

function getSimilarMovies(id) {
  return fetch(`${url}/movie/${id}/similar?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

function getReviews(id) {
  return fetch(`${url}/movie/${id}/reviews?${APIkey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => data.results);
}

function getActorDetails(id) {
  return fetch(`${url}/person/${id}?${APIkey}&language=en-US`)
    .then(response => response.json())
    .then(data => data);
}

function search(val) {
  return fetch(`${url}/search/movie?${APIkey}&query=${val}`)
    .then(response => response.json())
    .then(data => data);
}

export default {
  getNowPlaying,
  getMostPopular,
  getTopRated,
  getDetail,
  getCredits,
  getSimilarMovies,
  getReviews,
  getActorDetails,
  search
};
