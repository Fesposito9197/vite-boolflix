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
  <div class="my-card">
    <img
      v-if="info.poster_path !== null"
      :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`"
      :alt="info.title"
      class="w-100"
    />
    <img v-else src="https://via.placeholder.com/342x513" :alt="info.title" />
    <div class="overlay">
      <ul class="text-white p-2">
        <li><span class="fw-bold">Titolo:</span> {{ info.title }}</li>
        <li>
          <span class="fw-bold">Titolo originale:</span>
          {{ info.original_title }}
        </li>
        <li><span class="fw-bold">Voto:</span></li>
        <li class="text-break">
          <span class="fw-bold">Overview:</span> {{ info.overview }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: black;
}

.my-card:hover .overlay {
  opacity: 1;
  cursor: pointer;
}
.my-card {
  width: calc(100% / 4);
  margin: 10px 50px;
  position: relative;
}

ul {
  list-style: none;
  li:not(:last-child) {
    margin-bottom: 5px;
  }
}
</style>
