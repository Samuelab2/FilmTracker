<template>
  <div class="section__carrousel-container">
    <button class="section__btnCorrousel" @click="moveLeft">PREV</button>
    <div class="Movies-grid" ref="carrousel">
      <div
        v-for="item in movies"
        :key="item.id"
        class="movie--container"
        ref="carrouselItem"
      >
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
    <button class="section__btnCorrousel" @click="moveRight">
      NEXT
    </button>
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

  mounted() {
    this.intersection();
  },

  methods: {
    moveRight() {
      const carrouselScreenWidth = this.$refs.carrousel.clientWidth;
      this.$refs.carrousel.scrollBy({
        left: carrouselScreenWidth,
        behavior: "smooth"
      });
    },
    moveLeft() {
      const carrouselScreenWidth = this.$refs.carrousel.clientWidth;
      this.$refs.carrousel.scrollBy({
        left: -carrouselScreenWidth,
        behavior: "smooth"
      });
    },
    intersection() {
      const items = this.$refs.carrouselItem;
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2
      });

      function handleIntersection(entries, observer) {
        entries.map(item => {
          if (item.isIntersecting) {
            item.target.classList.add("is-visible");
            observer.unobserve(item.target);
          } else {
            item.target.classList.remove("is-visible");
          }
        });
      }
      if (items) {
        return items.map(value => {
          observer.observe(value);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section__carrousel-container {
  display: flex;
  align-items: center;
}
.section__btnCorrousel {
  cursor: pointer;
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
  // gap: 15px;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
}

.movie--container {
  width: 330px;
  height: 480px;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  scroll-snap-align: start;
  opacity: 0;
  transition: ease 1s;
}

.movie__image--container {
  margin: 0;
  width: 100%;
  height: 100%;
  & img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
}

.movie--info {
  display: flex;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.88);
  color: white;
  width: 100%;
  height: 100%;
  margin: 0;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: 0.4s ease;
  & p {
    margin: 5px 5px;
    padding: 15px;
    text-align: justify;
    line-height: 20px;
  }

  & h3 {
    font-weight: bold;
    margin: 5px 5px;
    font-size: 25px;
  }
  &:hover {
    transition: 0.3s ease;
    opacity: 1;
  }
}

.is-visible {
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .section__btnCorrousel {
    display: none;
  }

  .Movies-grid {
    overflow-x: auto;
  }

  .movie--container {
    width: 240px;
    height: 320px;
  }
}
</style>
