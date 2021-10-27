<template>
<!-- <StarWarsList/> -->
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
    console.log(this.state)
    await StarWarsApi.getCharacters()
    await StarWarsApi.getPlanets()
    await StarWarsApi.getSpecies()
    await StarWarsApi.getVehicles()
    await StarWarsApi.getStarships() 
    this.state = true
    console.log(this.state)
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
