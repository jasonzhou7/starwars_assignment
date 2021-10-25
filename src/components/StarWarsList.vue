<template>
  <h1>STAR WARS MOVIE VIEWER</h1>
  <SearchBar />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <MovieCard v-for="(item, index) in info" :key="item.id" :name="item.title" :movieNum="index + 1" />
</template>

<script>
import MovieCard from './MovieCard.vue';
import SearchBar from './SearchBar.vue';
import StarWarsApi from '../utils/StarWarsApi';

export default {
  name: 'StarWarsList',
  data() {
    return {
      info: [],
    };
  },
  components: {
    MovieCard,
    SearchBar,
  },
  created() {
    StarWarsApi.getFilms()
      .then((response) => {
        this.info = response.data.results;
        console.log(this.info);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>