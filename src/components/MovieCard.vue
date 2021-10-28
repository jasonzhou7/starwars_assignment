<template>
  <button
    type="button"
    id="titleButton"
    class="btn btn-primary"
    data-bs-toggle="modal"
    :data-bs-target="'#demo' + indexNum"
  >
    {{ name }}
  </button>
  <br />

  <div
    class="modal fade"
    :id="'demo' + indexNum"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-people-tab"
              data-bs-toggle="tab"
              :data-bs-target="'#nav-people' + indexNum"
              type="button"
              role="tab"
              aria-controls="nav-people"
              aria-selected="true"
            >
              People
            </button>
            <button
              class="nav-link"
              id="nav-planets-tab"
              data-bs-toggle="tab"
              :data-bs-target="'#nav-planets' + indexNum"
              type="button"
              role="tab"
              aria-controls="nav-planets"
              aria-selected="false"
            >
              Planets
            </button>
            <button
              class="nav-link"
              id="nav-starships-tab"
              data-bs-toggle="tab"
              :data-bs-target="'#nav-starships' + indexNum"
              type="button"
              role="tab"
              aria-controls="nav-starships"
              aria-selected="false"
            >
              Starships
            </button>

            <button
              class="nav-link"
              id="nav-vehicles-tab"
              data-bs-toggle="tab"
              :data-bs-target="'#nav-vehicles' + indexNum"
              type="button"
              role="tab"
              aria-controls="nav-vehicles"
              aria-selected="false"
            >
              Vehicles
            </button>

            <button
              class="nav-link"
              id="nav-species-tab"
              data-bs-toggle="tab"
              :data-bs-target="'#nav-species' + indexNum"
              type="button"
              role="tab"
              aria-controls="nav-species"
              aria-selected="false"
            >
              Species
            </button>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <br />
          <div
            class="tab-pane fade show active"
            :id="'nav-people' + indexNum"
            role="tabpanel"
            aria-labelledby="nav-people-tab"
          >
            <ul>
              <li v-for="(characters, index) in allCharacters" :key="index">
                {{ characters.name }}
              </li>
            </ul>
          </div>

          <div
            class="tab-pane fade"
            :id="'nav-planets' + indexNum"
            role="tabpanel"
            aria-labelledby="nav-planets-tab"
          >
            <ul>
              <li v-for="(planets, index) in allPlanets" :key="index">
                {{ planets.name }}
              </li>
            </ul>
          </div>

          <div
            class="tab-pane fade"
            :id="'nav-starships' + indexNum"
            role="tabpanel"
            aria-labelledby="nav-starships-tab"
          >
            <ul>
              <li v-for="(starships, index) in allStarships" :key="index">
                {{ starships.name }}
              </li>
            </ul>
          </div>

          <div
            class="tab-pane fade"
            :id="'nav-vehicles' + indexNum"
            role="tabpanel"
            aria-labelledby="nav-vehicles-tab"
          >
            <ul>
              <li v-for="(vehicles, index) in allVehicles" :key="index">
                {{ vehicles.name }}
              </li>
            </ul>
          </div>

          <div
            class="tab-pane fade"
            :id="'nav-species' + indexNum"
            role="tabpanel"
            aria-labelledby="nav-species-tab"
          >
            <ul>
              <li v-for="(species, index) in allSpecies" :key="index">
                {{ species.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  data() {
    return {
      allCharacters: [],
      allPlanets: [],
      allStarships: [],
      allVehicles: [],
      allSpecies: [],
    };
  },
  props: {
    name: String,
    indexNum: Number,
    characters: Array,
    planets: Array,
    starships: Array,
    vehicles: Array,
    species: Array,
  },
  created() {
    this.allCharacters = JSON.parse(localStorage.getItem("characters"));
    this.allCharacters = this.allCharacters.filter((char) =>
      this.characters.includes(char.url)
    );

    this.allPlanets = JSON.parse(localStorage.getItem("planets"));
    this.allPlanets = this.allPlanets.filter((planet) =>
      this.planets.includes(planet.url)
    );

    this.allStarships = JSON.parse(localStorage.getItem("starships"));
    this.allStarships = this.allStarships.filter((starships) =>
      this.starships.includes(starships.url)
    );

    this.allVehicles = JSON.parse(localStorage.getItem("vehicles"));
    this.allVehicles = this.allVehicles.filter((vehicles) =>
      this.vehicles.includes(vehicles.url)
    );

    this.allSpecies = JSON.parse(localStorage.getItem("species"));
    this.allSpecies = this.allSpecies.filter((species) =>
      this.species.includes(species.url)
    );
  },
};
</script>