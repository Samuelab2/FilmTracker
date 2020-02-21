<template>
  <header class="header">
    <figure class="header__figure">
      <router-link :to="{ name: 'Home' }">
        <h1>FilmTracker</h1>
      </router-link>
      <span @click="toggleMenu" class="HamburgerMenu">Menu</span>
    </figure>

    <input
      class="header__input"
      type="text"
      placeholder="Busca tu pelicula, serie o actor favorito"
    />
    <div class="header__userinfo">
      <a href="#">Samuel Mata</a>
      <img class="avatar" :src="require('@/assets/avatar.jpg')" alt="avatar" />
      <img class="arrow" :src="require('@/assets/arrow.png')" alt="arrow" />
      <ul>
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Cerrar Sessión</a></li>
      </ul>
    </div>
    <Menu @close="toggleMenu" v-show="isOpen" />
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "MHeader",
  components: {
    Menu
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
.header {
  display: flex;
  position: sticky;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  background-color: black;
  z-index: 1;
}

.header__figure {
  display: flex;
  height: 50px;
  align-items: center;
  margin: 0 0.5em;
}

.header__figure h1 {
  font-size: 25px;
  display: inline-block;
  color: white;
  padding: 5px;
  border: 2px dashed white;
}

.header .HamburgerMenu {
  width: 60px;
  height: 30px;
  margin-left: 1em;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

.HamburgerMenu:hover {
  background-position: right center;
}

.header__input {
  width: 40%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
  outline: transparent;
}

.header__input::placeholder {
  color: black;
}

.header__userinfo {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  justify-content: space-evenly;
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  padding: 0 0.3em;
}

.header__userinfo a {
  text-decoration: none;
  letter-spacing: 1px;
  color: white;
  font-weight: bold;
}
.header__userinfo ul {
  position: absolute;
  list-style: none;
  display: none;
  top: 70px;
  margin: 0;
  padding: 0;
  text-align: right;
  width: 100%;
  line-height: 25px;
  text-align: right;
  transition: background 2s;
}

.header__userinfo ul li {
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  transition: background 2s ease;
}

.header__userinfo:hover {
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

.header__userinfo:hover ul {
  display: block;
  background: linear-gradient(
    97deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}

.avatar {
  width: 35px;
  border-radius: 77px;
  height: 40px;
  margin: 0 10px;
}

.arrow {
  width: 20px;
  filter: invert(1);
}
</style>
