<template>
  <nav class="menu">
    <button @click="closeModal">X</button>
    <ul class="navigation">
      <li>
        <a href="#">
          <img :src="require('@/assets/home.png')" alt="Home" />
          Home</a
        >
      </li>
      <li>
        <a href="#">
          <img :src="require('@/assets/trending.png')" alt="Trending" />
          Trending</a
        >
      </li>
      <li>
        <a href="#">
          <img :src="require('@/assets/heart.png')" alt="likes" />
          Más likes</a
        >
      </li>
    </ul>
  </nav>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.menu img {
  width: 40px;
  height: 40px;
  margin-top: 20px;
}

.menu a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  list-style: none;
  padding: 0;
}
</style>
