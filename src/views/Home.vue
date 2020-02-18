<template>
  <div class="grid-container">
    <section class="inMovies">
      <h2>Now Playing</h2>
      <MovieContainer :movies="nowPlaying" />
    </section>
    <section class="liked">
      <h2>Most Popular</h2>
      <MovieContainer :movies="mostPopular" />
    </section>
    <section class="dontmiss">
      <h2>Top Rated</h2>
      <MovieContainer :movies="topRated" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieContainer from "@/components/MovieContainer.vue";
import api from "@/api.js";

export default {
  name: "Home",
  components: {
    MovieContainer
  },
  data() {
    return {
      nowPlaying: [],
      mostPopular: [],
      topRated: []
    };
  },
  created() {
    api.getNowPlaying().then(nowPlaying => (this.nowPlaying = nowPlaying));
    api.getMostPopular().then(mostPopular => (this.mostPopular = mostPopular));
    api.getTopRated().then(topRated => (this.topRated = topRated));
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 200px calc(100% - 400px) 200px;
  grid-template-rows: repeat(3, minmax(min-content, 265px));
  grid-template-areas:
    ". inMovie ."
    ". liked ."
    ". dontmiss .";
  margin-top: 15px;
}

.grid-container h2 {
  margin: 10px;
  font-size: 35px;
}

.inMovies {
  grid-area: inMovie;
}

.liked {
  grid-area: liked;
}

.dontmiss {
  grid-area: dontmiss;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e4e4e4;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
