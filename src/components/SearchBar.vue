<template>
  <input
    @input="$emit('inputWord', text)"
    v-model="text"
    placeholder="Search by name"
  />
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      text: "",
    };
  },
  emits: ["inputWord"],
};
</script>
