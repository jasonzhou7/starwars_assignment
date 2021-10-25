<template>
  <div>
    {{ name }}
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
        info: '',
        createdDate: []
      }
  },
  props: {
    name: String,
    movieNum: Number
  },
  components: {
    Details
  },
  created() {
    StarWarsApi.getFilm(this.movieNum.toString())
      .then((response) => {
        this.info = response.data;
        // console.log(this.info)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>