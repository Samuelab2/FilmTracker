<template>
  <div class="actors-grid">
    <div v-for="item in actors.cast" :key="item.id" class="actors--container">
      <router-link :to="{ name: 'actors-details', params: { id: item.id } }">
        <figure class="actors__image--container">
          <img
            :src="`https://image.tmdb.org/t/p/w500${item.profile_path}`"
            :alt="`${item.name}`"
          />
        </figure>
        <h3>{{ item.name }}</h3>
        <span>
          {{ item.character }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActorsView",
  props: {
    actors: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.actors-grid {
  justify-items: center;
  display: grid;
  overflow-x: auto;
  grid-auto-flow: column;
  padding: 20px 0;
  gap: 25px;
}

.actors-grid::after,
.actors-grid::before {
  content: "";
  width: 10px;
}

.actors--container {
  transition: box-shadow 0.3s;
}

.actors__image--container img:hover {
  /* border: 5px solid lightgray; */
  box-shadow: 0px 0px 19px 4px grey;
  cursor: pointer;
}

.actors__image--container {
  width: 65px;
  height: 70px;
}

.actors__image--container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid black;
}

.actors--info h3 {
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
