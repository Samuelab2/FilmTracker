<template>
  <header class="header">
    <figure class="header__figure">
      <img :src="require('@/assets/logo.jpg')" alt="Logo Movi.es" />
      <h1>Movi.es</h1>
      <span @click="toggleMenu" class="HamburgerMenu">Menu</span>
    </figure>

    <input
      class="header__input"
      type="text"
      placeholder="Busca tu peli, actor o director favorito"
    />
    <div class="header__userinfo">
      <a href="#">Samuel Mata</a>
      <img class="avatar" :src="require('@/assets/avatar.jpg')" alt="avatar" />
      <img class="arrow" :src="require('@/assets/arrow.png')" alt="arrow" />
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sessión</a></li>
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
  box-shadow: 1px 1px 15px 0px lightgrey;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  background: linear-gradient(white 70%, rgba(255, 255, 255, 0.8));
  z-index: 1;
}

.header__figure {
  display: flex;
  height: 50px;
  align-items: center;
  margin: 0 40px;
}

.header__figure img {
  width: 40px;
}

.header__figure h1 {
  font-size: 25px;
  display: inline-block;
}

.header .HamburgerMenu {
  width: 50px;
  height: 50px;
  background-color: #797979;
  border-radius: 50%;
  margin: 0 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.header__input {
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
  outline: transparent;
}

.header__input::placeholder {
  color: lightgray;
}

.header__userinfo {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  margin: 0 10px;
  justify-content: space-evenly;
  transition: background 0.5s;
}

.header__userinfo a {
  text-decoration: none;
  letter-spacing: 1px;
  color: black;
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
  transition: background 2s;
}

.header__userinfo:hover {
  background: rgba(252, 98, 98, 0.75);
}

.header__userinfo:hover ul {
  display: block;
  background: rgba(252, 98, 98, 0.75);
}

.avatar {
  width: 40px;
  margin: 0 10px;
}

.arrow {
  width: 20px;
}
</style>
