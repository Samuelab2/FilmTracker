<template>
  <div class="movie-details__container">
    <figure class="movie-details__image-container">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        alt=""
      />
    </figure>
    <div class="movie-details__info">
      <h1>{{ movie.title }}</h1>
      <hr />
      <ul>
        <li>
          Release date:
          <span>{{ movie.release_date }}</span>
        </li>
        <li>
          Average rating:
          <span> {{ movie.vote_average }}</span>
        </li>
        <li>
          Genres:
          <span v-for="i in movie.genres" :key="i.id">{{ i.name }} </span>
        </li>
        <li>
          Original language:
          <span>{{ movie.original_language }}</span>
        </li>
        <li>
          Duration:
          <span> {{ movie.runtime }} min</span>
        </li>
      </ul>
      <hr />
      <p>
        {{ movie.overview }}
      </p>
    </div>
    <div class="movie-cast-list">
      <h3>Actors</h3>
      <ActorsView :actors="cast" />
    </div>
    <div class="movie-related">
      <h3>More like this</h3>
      <div>
        <MovieContainer :movies="similarMovies" />

      </div>
    </div>
    <div class="movie-reviews">
      <h3>What people thinks</h3>
      <div v-for="i in filteredReviews" :key="i.id">
        <h3>{{ i.author }}</h3>
        <p>{{ i.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
import MovieContainer from "@/components/MovieContainer.vue";
import ActorsView from "@/components/ActorsView.vue";

export default {
  name: "MovieDetails",
  components: { MovieContainer, ActorsView },
  data() {
    return {
      movie: [],
      cast: {},
      similarMovies: [],
      reviews: []
    };
  },
  created() {
    this.getData();
  },

  watch: {
    $route() {
      this.getData();
    }
  },

  computed: {
    filteredReviews() {
      let filter = [];
      if (this.reviews.length > 0) {
        this.reviews.map(item => {
          if (item.content.length <= 1000) {
            return filter.push(item);
          }
        });
      }
      return filter;
    }
  },

  methods: {
    getData() {
      const id = this.$route.params.id;
      Promise.all([
        api.getDetail(id),
        api.getCredits(id),
        api.getSimilarMovies(id),
        api.getReviews(id)
      ]).then(([detail, credits, similarMovies, reviews]) => {
        this.movie = detail;
        this.cast = credits;
        this.similarMovies = similarMovies;
        this.reviews = reviews;
      });
    }
  }
};
</script>
<style scoped>
.movie-details__container {
  display: grid;
  grid-template-columns: 10vw 40vw 40vw 10vw;
  grid-template-rows: repeat(4, min-content);
  grid-gap: 1em;
  margin-top: 1em;
  grid-template-areas:
    ". poster details ."
    ". cast cast ."
    ". more more ."
    ". reviews reviews .";
}

.movie-details__image-container {
  grid-area: poster;
  margin: 0;
}

.movie-details__image-container img {
  border: 5px solid black;
  width: 100%;
  box-sizing: border-box;
}

.movie-details__info {
  grid-area: details;
  display: flex;
  flex-direction: column;
}

.movie-details__info h1 {
  width: 100%;
  align-self: center;
  font-size: 2em;
  border-radius: 10px;
  margin: 0.3em;
}

.movie-details__info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.movie-details__info hr {
  /* margin: 10px; */
  width: 100%;
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  height: 10px;
  border: none;
}

.movie-details__info ul li {
  font-weight: bold;
  font-size: 1.2em;
  text-align: justify;
  line-height: 35px;
}

.movie-details__info ul li span {
  font-weight: normal;
  font-size: 0.9em;
}

.movie-details__info p {
  line-height: 1.5em;
  text-align: justify;
  font-size: 1.1em;
}

.movie-cast-list {
  grid-area: cast;
}

.movie-related {
  grid-area: more;
}

.movie-reviews {
  grid-area: reviews;
}
</style>
