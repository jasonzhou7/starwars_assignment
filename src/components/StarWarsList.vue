<template>
  <div class="main-page">
    <br />
    <MovieCard
      v-for="(film, index) in this.films.results"
      :key="film.id"
      :indexNum="index"
      :name="film.title"
      :characters="film.characters"
      :planets="film.planets"
      :starships="film.starships"
      :vehicles="film.vehicles"
      :species="film.species"
    />
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  name: "StarWarsList",
  data() {
    return {
      films: [],
      allCharacters: [],
      searchedWord: "",
    };
  },
  components: {
    MovieCard,
  },
  async created() {
    this.films = JSON.parse(localStorage.getItem("films"));
  },
};
</script>

<style>
body {
  background: black;
}

h1 {
  color: yellow;
}

button {
  color: yellow;
}

#titleButton {
  width: 80%
}
.main-page {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>