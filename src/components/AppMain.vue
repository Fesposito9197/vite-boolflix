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
  <main>
    <div class="container pt-4">
      <h2>MOVIES</h2>
    </div>
    <div class="container d-flex flex-wrap mt-4">
      <AppCardMovies v-for="movie in store.movies" :info="movie" />
    </div>
    <div class="container pt-4">
      <h2>TV SERIES</h2>
    </div>
    <div class="container d-flex flex-wrap justify-content-between mt-4">
      <AppCardSeries v-for="serie in store.tvseries" :info="serie" />
    </div>
  </main>
</template>

<style lang="scss"></style>
