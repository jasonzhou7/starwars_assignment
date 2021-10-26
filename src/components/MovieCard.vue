<template>
  <div>
    {{ name }}
    <!-- {{ info }} -->
    <div v-for="(names, index) in filteredListing" :key="index">
      {{names.name}}
    </div>
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
        matchingResults: [],
        info: []
      }
  },
  props: {
    name: String,
    movieNum: String,
    characters: Array
  },
  created () {
    this.info = JSON.parse(localStorage.getItem('characters'))
  },
  computed: {
    filteredListing: function() {
      return this.info
      .filter((listing) => {
        return (this.characters.includes(listing.url))
      })
    }
  }
};
</script>