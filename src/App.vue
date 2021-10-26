<template>
  <StarWarsList />

  {{ $root.authData ? $root.authData.name : null }}
</template>

<script>
import StarWarsList from "./components/StarWarsList.vue";
import StarWarsApi from "./utils/StarWarsApi";
// import {getFilms} from './utils/API'

export default {
  name: "App",
  components: {
    StarWarsList,
  },
  async created() {
    await StarWarsApi.getCharacters()
    await StarWarsApi.getPlanets()
    await StarWarsApi.getSpecies()
    await StarWarsApi.getVehicles()
    await StarWarsApi.getStarships()
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
