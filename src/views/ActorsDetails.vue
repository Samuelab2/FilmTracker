<template>
  <div class="actors-details__container">
    <figure class="actors-details__image-container">
      <img
        :src="`https://image.tmdb.org/t/p/w500${details.profile_path}`"
        alt=""
      />
    </figure>
    <div class="actors-details__info">
      <h1>{{ details.name }}</h1>
      <hr />
      <ul>
        <li>
          Birthday:
          <span>{{ details.birthday }}</span>
        </li>
        <li>
          Known for:
          <span> {{ details.known_for_department }}</span>
        </li>
        <li>
          Place of birth:
          <span>{{ details.place_of_birth }}</span>
        </li>
        <li>
          Popularity:
          <span> {{ details.popularity }} min</span>
        </li>
      </ul>
      <hr />
      <h4>Biography</h4>
      <p>
        {{ details.biography }}
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";

export default {
  name: "ActorsDetails",

  data() {
    return {
      details: {}
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      const id = this.$route.params.id;
      api.getActorDetails(id).then(data => (this.details = data));
    }
  }
};
</script>

<style scoped>
.actors-details__container {
  display: grid;
  grid-template-columns: 15vw 35vw 35vw 15vw;
  grid-gap: 10px;
  grid-template-areas: ". poster details .";
}

.actors-details__image-container {
  grid-area: poster;
}

.actors-details__image-container img {
  border: 5px solid black;
  width: 100%;
  box-sizing: border-box;
}

.actors-details__info {
  grid-area: details;
  display: flex;
  flex-direction: column;
}

.actors-details__info h1 {
  width: 100%;
  align-self: center;
  font-size: 2em;
  margin: 1rem;
}

.actors-details__info h4 {
  margin: 10px;
}

.actors-details__info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.actors-details__info hr {
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

.actors-details__info ul li {
  font-weight: bold;
  font-size: 1.2em;
  text-align: justify;
  line-height: 35px;
}

.actors-details__info ul li span {
  font-weight: normal;
  font-size: 1em;
}

.actors-details__info p {
  line-height: 1.4em;
  text-align: justify;
  font-size: 1em;
  overflow: scroll;
  max-height: 20em;
}
</style>
