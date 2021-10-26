<template>
  <div>
    {{ name }}
    {{ info }}
    <!-- {{ info.created }} -->
    <!-- <Details v-for="(i, index) in info.characters" :key="index" :url="i"/> -->
    <i class="fas fa-plus"></i>
  </div>
</template>

<script>
import StarWarsApi from '../utils/StarWarsApi'
import Details from './Details.vue'

export default {
  name: "MovieCard",
  data() {
      return {
        allCharacters: [],
        info: JSON.parse(localStorage.getItem('characters'))
      }
  },
  props: {
    name: String,
    movieNum: String,
    characters: Array
  },
  // computed() {
  //   filteredListing: fucnction () {
  //     return this.allCharacters.re
  //   }
  // }
};
</script>