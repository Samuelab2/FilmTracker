<template>
  <div class="section__carrousel-container">
    <button class="section__btnCorrousel" @click="moveLeft">PREV</button>
    <div class="Movies-grid" ref="carrousel">
      <div v-for="item in movies" :key="item.id" class="movie--container">
        <router-link :to="{ name: 'movie-detail', params: { id: item.id } }">
          <figure class="movie__image--container">
            <img
              :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
              :alt="`${item.title}`"
            />
          </figure>
          <span class="movie--info">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.overview }}
            </p>
          </span>
        </router-link>
      </div>
    </div>
    <button class="section__btnCorrousel" @click="moveRight">NEXT</button>
  </div>
</template>

<script>
export default {
  name: "MovieContainer",
  props: {
    movies: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      container: []
    };
  },
  methods: {
    moveRight() {
      console.log(
        this.$refs.carrousel.scrollBy({
          left: 1500,
          behavior: "smooth"
        })
      );
    },
    moveLeft() {
      console.log(
        this.$refs.carrousel.scrollBy({
          left: -1500,
          behavior: "smooth"
        })
      );
    }
  }
};
</script>

<style scoped>
.section__carrousel-container {
  display: flex;
  align-items: center;
}
.section__btnCorrousel {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  margin: 0 20px;
  outline-color: transparent;
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

.Movies-grid {
  justify-items: center;
  display: grid;
  overflow-x: hidden;
  grid-auto-flow: column;
  padding: 20px 0;
  gap: 15px;
}

/* .Movies-grid::after,
.Movies-grid::before {
  content: "";
  width: 10px;
} */

.movie--container {
  width: 330px;
  height: 480px;
  position: relative;
  box-shadow: 0px 0px 8px 0px;
  transition: box-shadow 0.3s;
}

.movie--container:hover {
  /* border: 5px solid lightgray; */
  box-shadow: 0px 0px 19px 4px grey;
  cursor: pointer;
}

.movie__image--container {
  margin: 0;
  width: 100%;
  height: 100%;
}

.movie__image--container img {
  width: 100%;
  height: 100%;
}

.movie--info {
  display: flex;
  position: absolute;
  bottom: 0;
  background: rgba(68, 68, 68, 0.75);
  color: white;
  width: 100%;
  margin: 0;
  flex-direction: column;
  justify-content: flex-end;
}

.movie--info p {
  margin: 5px 5px;
  padding: 15px;
  text-align: justify;
  line-height: 20px;
}

.movie--info h3 {
  font-weight: bold;
  margin: 5px 5px;
  font-size: 25px;
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
