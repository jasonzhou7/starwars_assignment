<template>
  <div>
    {{ name }}

    <div>
      <h2>Characters</h2>
      <div v-for="(names, index) in filteredCharacters" :key="index">
      {{names.name}}
      </div>
    </div>


    <i class="fas fa-plus"></i>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  data() {
      return {
        matchingResults: [],
        filmCharacters: []
      }
  },
  props: {
    name: String,
    movieNum: String,
    characters: Array,
    planets: Array,
    starships: Array,
    vehicles: Array,
    species: Array,
    },
  async mounted () {
    console.log('we are here')
    this.filmCharacters = await JSON.parse(localStorage.getItem('characters'))
  },
  computed: {
    filteredCharacters: function() {
      return this.filmCharacters
      .filter((listing) => {
        return (this.characters.includes(listing.url))
      })
    }
  }
};
</script>