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
    goSearch() {
      if (this.store.searchText != "") {
        this.getUserSearch("movie");
        this.getUserSearch("tv");
      }
    },

    getUserSearch(type) {
      axios
        .get("https://api.themoviedb.org/3/search/" + type, {
          params: {
            api_key: "86792600373b67f4bee4b673f1559637",
            query: this.store.searchText,
            language: "it-IT",
          },
        })
        .then((res) => {
          if (type == "movie") {
            this.store.movies = res.data.results;
          } else if (type == "tv") {
            this.store.tvseries = res.data.results;
          }
        });
    },
  },
  mounted() {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "86792600373b67f4bee4b673f1559637",
          language: "it-IT",
        },
      })
      .then((res) => {
        this.store.movies = res.data.results;
      });
    axios
      .get("https://api.themoviedb.org/3/tv/top_rated", {
        params: {
          api_key: "86792600373b67f4bee4b673f1559637",
          language: "it-IT",
        },
      })
      .then((res) => {
        this.store.tvseries = res.data.results;
      });
  },
};
</script>

<template>
  <AppHeader @search="goSearch" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
body {
  background-color: grey !important;
}
@import "./style/global.scss";
</style>
