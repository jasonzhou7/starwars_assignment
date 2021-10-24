<template>
  <img alt="Vue logo" src="./assets/logo.png">
  {{ info }} 
  <MovieList/>
</template>

<script>
import MovieList from './components/MovieList.vue'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      info: []
    }
  },
  components: {
    MovieList
  },
  mounted () {
    axios
    .get('https://swapi.dev/api/')
    .then(response => {
      this.info = response.data;
      console.log(this.info)})
    .catch(error => {
      console.log(error)
    })
      }
}
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
