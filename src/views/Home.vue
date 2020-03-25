<template>
  <div class="grid-container">
    <section class="inMovies">
      <h2>Now Playing</h2>
      <HashLoader class="spinners" :loading="loadingNowPlaying" :size="50" />
      <MovieContainer v-if="loadingNowPlaying === false" :movies="nowPlaying" />
    </section>
    <section class="liked">
      <h2>Most Popular</h2>
      <HashLoader class="spinners" :loading="loadingMostPopular" :size="50" />
      <MovieContainer
        v-if="loadingMostPopular === false"
        :movies="mostPopular"
      />
    </section>
    <section class="dontmiss">
      <h2>Top Rated</h2>
      <HashLoader class="spinners" :loading="loadingTopRated" :size="50" />
      <MovieContainer v-if="loadingTopRated === false" :movies="topRated" />
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
      topRated: [],
      loadingNowPlaying: false,
      loadingMostPopular: false,
      loadingTopRated: false
    };
  },
  created() {
    this.loadingNowPlaying = true;
    this.loadingMostPopular = true;
    this.loadingTopRated = true;
    api
      .getNowPlaying()
      .then(nowPlaying => (this.nowPlaying = nowPlaying))
      .finally(() => (this.loadingNowPlaying = false));
    api
      .getMostPopular()
      .then(mostPopular => (this.mostPopular = mostPopular))
      .finally(() => (this.loadingMostPopular = false));
    api
      .getTopRated()
      .then(topRated => (this.topRated = topRated))
      .finally(() => (this.loadingTopRated = false));
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: repeat(3, minmax(min-content, 265px));
  grid-template-areas:
    ". inMovie ."
    ". liked ."
    ". dontmiss .";
  margin-top: 15px;
}

.grid-container h2 {
  margin: 10px;
  font-size: 2em;
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

.spinners {
  margin: 0 auto;
  justify-self: center;
  align-self: center;
}
</style>
