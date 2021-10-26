<template>
  <h1>STAR WARS MOVIE VIEWER</h1>
  {{ filmInfo }}
  <SearchBar />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <MovieCard v-for="(item, index) in films.results" 
  :key="item.id" 
  :name="item.title" 
  :characters="item.characters"
  :movieNum="index" />
</template>

<script>
import MovieCard from './MovieCard.vue';
import SearchBar from './SearchBar.vue';
import StarWarsApi from '../utils/StarWarsApi'

export default {
  name: 'StarWarsList',
  data() {
    return {
      films: [],
    };
  },
  components: {
    MovieCard,
    SearchBar,
  },
  async created() {
    this.films = await StarWarsApi.getFilms()
  },
};
</script>