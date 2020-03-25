<template>
  <div
    class="header__inputContainer"
    @mouseleave="toggleShow"
    @mouseenter="toggleShow"
  >
    <input
      class="header__input"
      type="text"
      placeholder="Busca tu pelicula, serie o actor favorito"
      v-model="query"
      @keyup="multiSearch"
    />
    <ul class="searchbar__results" v-show="visible">
      <li v-for="(result, i) in queryResults" :key="i" @click="clear">
        <router-link
          class="searchbar__results--item"
          :to="{ name: 'movie-detail', params: { id: result.id } }"
        >
          {{ result.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api.js";

export default {
  name: "MSearchbar",
  data() {
    return {
      query: "",
      queryResults: [],
      visible: false
    };
  },
  methods: {
    async multiSearch() {
      this.queryResults = [];
      if (this.query.length > 0) {
        this.visible = true;
        let response = await api.search(this.query);
        response.results.map(item => {
          if (item.title) {
            this.queryResults.push(item);
          }
        });
      }
    },
    clear() {
      this.query = "";
      this.queryResults = [];
      this.toggleShow();
    },
    toggleShow() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
.header__inputContainer {
  width: 40%;
}

.header__input {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
  outline: transparent;
  position: relative;
  &::placeholder {
    color: #555;
  }
}

.searchbar__results {
  color: white;
  position: absolute;
  background-color: black;
  width: 40%;
  max-height: 400px;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0px 9px 20px 1px black;
}

.searchbar__results--item {
  text-decoration: none;
  color: white;
  font-weight: bold;
  line-height: 40px;
  font-size: 16px;
  &:hover {
    background: linear-gradient(
      97deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    padding: 12px;
    border-radius: 6px;
  }
}
</style>
