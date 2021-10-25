<template>
  <div>
    {{ name }}
    <!-- {{ movieNum }}
    {{ createdDate }} -->
    <i class="fas fa-plus"></i>
  </div>
</template>

<script>
import StarWarsApi from '../utils/StarWarsApi'

export default {
  name: "MovieCard",
  data() {
      return {
        info: '',
        createdDate: []
      }
  },
  props: {
    name: String,
    movieNum: Number
  },
  created() {
    StarWarsApi.getFilm(this.movieNum.toString())
      .then((response) => {
        this.info = response.data;
        this.createdDate = response.data.created
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>