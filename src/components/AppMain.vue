<script>
import AppCardMovies from "./AppCardMovies.vue";
import AppCardSeries from "./AppCardSeries.vue";
import { store } from "../store";
export default {
  name: "AppMain",
  components: {
    AppCardMovies,
    AppCardSeries,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <h2>MOVIES</h2>
    <AppCardMovies v-for="movie in store.movies" :info="movie" />
    <h2>TV SERIES</h2>
    <AppCardSeries v-for="serie in store.tvseries" :info="serie" />
  </div>
</template>

<style lang="scss"></style>
