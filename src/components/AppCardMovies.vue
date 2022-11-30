<script>
import { store } from "../store";

export default {
  name: "AppCardMovies",
  props: {
    info: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <ul>
    <li>
      {{ info.title }} , {{ info.original_title }} ,
      {{ info.original_language }} ,
      {{ info.vote_average }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
