<template>
  <transition name="modal-fade">
    <nav class="menu">
      <h1>FilmTracker</h1>
      <button @click="closeModal">X</button>
      <ul class="menu-list menu-movies">
        <h2>Movies</h2>
        <li>
          <a href="#">
            <!-- <img :src="require('@/assets/home.png')" alt="Home" /> -->
            Reviews</a
          >
        </li>
        <li>
          <a href="#">
            <!-- <img :src="require('@/assets/trending.png')" alt="Trending" /> -->
            Lastest</a
          >
        </li>
        <li>
          <a href="#"> Now Playng</a>
        </li>
        <li>
          <a href="#"> Popular</a>
        </li>
        <li>
          <a href="#"> Top rated</a>
        </li>
        <li>
          <a href="#"> Upcoming</a>
        </li>
      </ul>
      <ul class="menu-list menu-TvShows">
        <h2>TV Shows</h2>

        <li>
          <a href="#"> Popular</a>
        </li>
        <li>
          <a href="#"> Top rated</a>
        </li>
        <li>
          <a href="#"> Caps Today</a>
        </li>
        <li>
          <a href="#"> Upcoming Caps</a>
        </li>
      </ul>
      <ul class="menu-list menu-extras">
        <h2>Extras</h2>
        <li>
          <a href="#"> Trending</a>
        </li>
        <li>
          <a href="#"> Popular People</a>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.menu {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
  background-color: rgba(2, 2, 2, 0.95);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.menu h1 {
  font-size: 35px;
  display: inline-block;
  color: white;
  padding: 5px;
  border: 2px dashed white;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 3;
}

.menu button {
  grid-column: 4 / 5;
  grid-row: 1/2;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  justify-self: right;
  align-self: center;
  border: none;
  font-size: 25px;
  font-weight: bolder;
}

.menu a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.menu a:hover {
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  padding: 5px;
  border-radius: 6px;
}

.menu-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  list-style: none;
  padding: 0;
  line-height: 40px;
  font-size: 20px;
}

.menu-list h2 {
  font-weight: bolder;
  font-size: 40px;
  color: white;
  text-decoration: underline;
}

.menu-movies {
  grid-column: 2/3;
  grid-row: 2/3;
}

.menu-TvShows {
  grid-column: 3/4;
  grid-row: 2/3;
}
.menu-extras {
  grid-column: 4/5;
  grid-row: 2/3;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
