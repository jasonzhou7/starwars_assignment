<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <MovieCard v-for="item in info" :key="item.id" :name="item"/> -->
  <MovieCard :name="info.count" />
</template>

<script>
import MovieCard from "./MovieCard.vue";
import StarWarsApi from "../utils/StarWarsApi";

export default {
  name: "StarWarsList",
  data() {
    return {
      info: [],
    };
  },
  components: {
    MovieCard,
  },
  created() {
    StarWarsApi.getFilms()
      .then((response) => {
        this.info = response.data;
        console.log(this.info);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>