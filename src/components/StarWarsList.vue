<template>
<div class="main-page">
  <h1>STAR WARS MOVIE VIEWER</h1>
  <!-- <SearchBar /> -->
  <br>
  <MovieCard v-for="(film, index) in films.results" 
  :key="film.id" 
  :indexNum="index"
  :name="film.title" 
  :characters="film.characters"
  :planets="film.planets"
  :starships="film.starships"
  :vehicles="film.vehicles"
  :species="film.species"/>
  </div>
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
  async mounted() {
    this.films = await StarWarsApi.getFilms()
  },
};
</script>

<style>
body {
  background: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h1 {
  color: yellow;
}

.main-page{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items:center
}
</style>