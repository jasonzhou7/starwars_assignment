<template>
  <h1>STAR WARS MOVIE VIEWER</h1>
<div v-if="state">
  <StarWarsList />
</div>
</template>

<script>
import StarWarsList from "./components/StarWarsList.vue";
import StarWarsApi from "./utils/StarWarsApi";

export default {
  name: "App",
  components: {
    StarWarsList,
  },
  data() {
      return {
        state: false,
      }
  },
  async created() {
    const listOfPromises = [];
    listOfPromises.push( StarWarsApi.getFilms());
    listOfPromises.push( StarWarsApi.getCharacters());
    listOfPromises.push( StarWarsApi.getPlanets());
    listOfPromises.push( StarWarsApi.getSpecies());
    listOfPromises.push( StarWarsApi.getVehicles());
    listOfPromises.push( StarWarsApi.getStarships()); 
    await Promise.all(listOfPromises);
    this.state = true
  }
};  
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
