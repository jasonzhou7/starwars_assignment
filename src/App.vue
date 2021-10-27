<template>
  <h1>STAR WARS MOVIE VIEWER</h1>
  <div v-if="state">
    <StarWarsList />
  </div>
  <Loading v-if="!state"/>
</template>

<script>
import StarWarsList from "./components/StarWarsList.vue";
import Loading from "./components/Loading.vue"
import StarWarsApi from "./utils/StarWarsApi";

export default {
  name: "App",
  components: {
    StarWarsList,
    Loading
  },
  data() {
    return {
      state: false,
    };
  },
  async created() {
    const listOfPromises = [];
    listOfPromises.push(StarWarsApi.getFilms());
    listOfPromises.push(StarWarsApi.getCharacters());
    listOfPromises.push(StarWarsApi.getPlanets());
    listOfPromises.push(StarWarsApi.getSpecies());
    listOfPromises.push(StarWarsApi.getVehicles());
    listOfPromises.push(StarWarsApi.getStarships());
    await Promise.all(listOfPromises);
    this.state = true;
  },
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

#loading {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  opacity: 0.7;
  background-color: #fff;
  z-index: 99;
}

#loading-image {
  position: absolute;
  top: 100px;
  left: 240px;
  z-index: 100;
}
</style>
