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
  <main>
    <div class="container pt-4">
      <h2>MOVIES</h2>
    </div>
    <div class="container d-flex flex-wrap mt-4">
      <AppCard v-for="movie in store.movies" :info="movie" />
    </div>
    <div class="container pt-4">
      <h2>TV SERIES</h2>
    </div>
    <div class="container d-flex flex-wrap mt-4">
      <AppCard v-for="serie in store.tvseries" :info="serie" />
    </div>
  </main>
</template>

<style lang="scss"></style>
