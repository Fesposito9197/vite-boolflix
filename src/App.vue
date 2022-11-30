<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from "./store";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getUserSearch() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "86792600373b67f4bee4b673f1559637",
            query: this.store.searchText,
            language: "it-IT",
          },
        })
        .then((res) => {
          this.store.movies = res.data.results;
        });
    },
  },
};
</script>

<template>
  <AppHeader @search="getUserSearch" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
