<template>
  <header class="header">
    <figure class="header__figure">
      <router-link :to="{ name: 'Home' }">
        <h1>FilmTracker</h1>
      </router-link>
      <span @click="toggleMenu" class="header-menu">Menu</span>
    </figure>

    <MSearchbar></MSearchbar>

    <div class="header__userinfo">
      <a href="#">Samuel Mata</a>
      <img class="avatar" :src="require('@/assets/avatar.jpg')" alt="avatar" />
      <img class="arrow" :src="require('@/assets/arrow.png')" alt="arrow" />
      <ul>
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Cerrar Sessión</a></li>
      </ul>
    </div>
    <div class="hamburgerMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <Menu @close="toggleMenu" v-show="isOpen" />
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";
import MSearchbar from "@/components/MSearchbar.vue";

export default {
  name: "MHeader",
  components: {
    Menu,
    MSearchbar
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

<style lang="scss" scoped>
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

.header-menu {
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

.header-menu:hover {
  background-position: right center;
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
.hamburgerMenu {
  height: 45px;
  width: 50px;
  margin-right: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px dashed white;
  cursor: pointer;
  display: none;
}

.line {
  background-color: white;
  height: 5px;
  width: 35px;
  border-radius: 10px;
  margin-top: 5px;
}

@media only screen and (max-width: 600px) {
  .header-menu {
    display: none;
  }
  .header__inputContainer {
    display: none;
  }
  .header__userinfo {
    display: none;
  }
  .hamburgerMenu {
    display: flex;
  }
}
</style>
