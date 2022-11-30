<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <ul v-for="movie in store.movies">
    <li>
      {{ movie.title }}, {{ movie.original_title }} ,
      {{ movie.original_language }} , {{ movie.vote_average }}
    </li>
  </ul>
  <AppCard />
</template>

<style lang="scss"></style>
