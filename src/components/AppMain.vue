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
    <div class="container">
      <h2>MOVIES</h2>
    </div>
    <div class="container d-flex flex-wrap">
      <AppCardMovies v-for="movie in store.movies" :info="movie" />
    </div>
    <div class="container">
      <h2>TV SERIES</h2>
    </div>
    <div class="container d-flex flex-wrap">
      <AppCardSeries v-for="serie in store.tvseries" :info="serie" />
    </div>
  </main>
</template>

<style lang="scss">
main {
  background-color: grey;
}
</style>
