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
  <AppCard v-for="movie in store.movies" :info="movie" />
</template>

<style lang="scss"></style>
