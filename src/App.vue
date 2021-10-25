<template>
  <StarWarsList />
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
};
// mounted () {
//   const test = async () => {
//     await getFilms();
//     console.log("after");
//   }
//   test();
//     }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
