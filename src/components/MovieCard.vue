<template>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#demo' + indexNum">
  {{ name }}
</button>

<!-- Modal -->
<div class="modal fade" :id="'demo' + indexNum" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">


        <ul>
          <h2>Characters</h2>
        <li v-for="(characters, index) in allCharacters" :key="index">{{characters.name}}</li>
        </ul>
    </div>
  </div>
</div>
  <!-- <div class="collapsible-wrapper">
    <div class="collapsible-item">
      <div @click="activateBody()" class="collapsible-item-header">
        {{ name }}
        </div>
        <div v-if="activate" class="collapsible-item-body">
          <div>
            CHARACTERS
            <div v-for="(characters, index) in filmCharacters" :key="index">
              {{characters.name}}
              </div>
            </div>
            <div>
              PLANETS
              <div v-for="(planets, index) in filteredPlanets" :key="index">
                {{planets.name}}
              </div>
            </div>
        </div>
      </div>
  </div> -->
</template>

<script>
export default {
  name: "MovieCard",
  data() {
    return {
      activate: false,
      allCharacters: [],
      // filmPlanets: [],
      // filmStarships: [],
      // filmVehicles: [],
      // filmSpecies: [],
      // filteredCharacters: []
    };
  },
  props: {
    name: String,
    indexNum: Number,
    movieNum: String,
    characters: Array,
    planets: Array,
    starships: Array,
    vehicles: Array,
    species: Array,
    modalId: String,
  },
  async mounted() {
    this.allCharacters =  await JSON.parse(localStorage.getItem("characters"));
    this.allCharacters = this.allCharacters.filter((char) => this.characters.includes(char.url))

    // this.filmPlanets =  await JSON.parse(localStorage.getItem("planets"));
    // this.filmStarships =  await JSON.parse(localStorage.getItem("starships"));
    // this.filmVehicles =  await JSON.parse(localStorage.getItem("vehicles"));
    // this.filmSpecies =  await JSON.parse(localStorage.getItem("species"));
  },
  // computed: {
  //   filteredCharacters: function () {
  //     return this.filmCharacters.filter((listing) => 
  //       this.characters.includes(listing.url)
  //     );
  //   },
  //   filteredPlanets: function () {
  //     return this.filmPlanets.filter((listing) => 
  //       this.planets.includes(listing.url)
  //     );
  //   },
  // },
  methods: {
    activateBody(){
      this.activate = !this.activate
    }
  }
};
</script>

<style>
.collapsible-wrapper {
  align-items:right;
  width: 50%;
  height: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 25px #555;
}

.collapsible-item-header {
  cursor: pointer;
  padding: 20px;
  background: #07173a;
  color: yellow;
  border-bottom: 1px solid yellow;
}

.collapsible-item-body {
  padding: 30px;
  background: #e91338;
  color: beige;
}
</style>