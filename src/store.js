import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  randomMovie: ["re", "ra", "ri", "cer", "ep"],
  movies: [],
  tvseries: [],
});
