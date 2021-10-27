<template>
<div class="main-page">
  <h1>STAR WARS MOVIE VIEWER</h1>
  <SearchBar />
  <br>
  <MovieCard v-for="item in films.results" 
  :key="item.id" 
  :name="item.title" 
  :characters="item.characters"
  :planets="item.planets"
  :starships="item.starships"
  :vehicles="item.vehicles"
  :species="item.species"/>
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
    // await StarWarsApi.getCharacters()
    // await StarWarsApi.getPlanets()
    // await StarWarsApi.getSpecies()
    // await StarWarsApi.getVehicles()
    // await StarWarsApi.getStarships() 
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