<template>
  <h1>{{ info.original_title }}</h1>
</template>

<script>
import api from "@/api.js";

export default {
  name: "MovieDetails",
  data() {
    return {
      info: {}
    };
  },
  created() {
    this.getMovieDetails();
  },

  methods: {
    getMovieDetails() {
      const id = this.$route.params.id;
      api.getDetail(id).then(data => (this.info = data));
    }
  }
};
</script>
