<template>
  <div class="grid-container">
    <section class="inMovies">
      <h2>Now Playing</h2>
      <SyncLoader class="spinners" :loading="isLoading" :size="20" />
      <MovieContainer v-if="isLoading === false" :movies="nowPlaying" />
    </section>
    <section class="liked">
      <h2>Most Popular</h2>
      <SyncLoader class="spinners" :loading="isLoading" :size="20" />
      <MovieContainer v-if="isLoading === false" :movies="mostPopular" />
    </section>
    <section class="dontmiss">
      <h2>Top Rated</h2>
      <SyncLoader class="spinners" :loading="isLoading" :size="20" />
      <MovieContainer v-if="isLoading === false" :movies="topRated" />
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
      isLoading: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      Promise.all([
        api.getNowPlaying(),
        api.getMostPopular(),
        api.getTopRated()
      ])
        .then(([nowPlaying, mostPopular, topRated]) => {
          this.nowPlaying = nowPlaying;
          this.mostPopular = mostPopular;
          this.topRated = topRated;
        })
        .finally(() => (this.isLoading = false));
    }
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
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
