<script>
import { store } from "../store";

export default {
  name: "AppCardSeries",
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
  <div class="col-4">
    <div class="my-card">
      <img
        v-if="info.poster_path !== null"
        :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`"
        :alt="info.name"
        class="img-fluid"
      />
      <img v-else src="https://via.placeholder.com/342x513" :alt="info.name" />
      <p>
        {{ info.name }} , {{ info.original_name }} ,
        {{ info.original_language }} ,
        {{ info.vote_average }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
