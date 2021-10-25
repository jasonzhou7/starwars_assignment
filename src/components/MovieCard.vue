<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    name: String,
  },
};
</script>