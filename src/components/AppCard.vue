<script>
import { store } from "../store";

export default {
  name: "AppCard",
  props: {
    info: Object,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    vote() {
      return Math.ceil(this.info.vote_average / 2);
    },
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
    <img
      v-else
      src="https://via.placeholder.com/342x485"
      :alt="info.title"
      class="w-100"
    />
    <div class="overlay">
      <ul class="text-white p-2">
        <li>
          <span class="fw-bold">Titolo:</span> {{ info.title }} {{ info.name }}
        </li>
        <li>
          <span class="fw-bold">Titolo originale:</span>
          {{ info.original_title }} {{ info.original_name }}
        </li>
        <li>
          <span class="fw-bold">Voto:</span>
          <i v-for="n in vote" class="bi bi-star-fill"></i>
          <i v-for="n in 5 - vote" class="bi bi-star"></i>
        </li>
        <li class="my-text-overflow">
          <span class="fw-bold">Overview:</span>
          {{ info.overview }}
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
.my-text-overflow {
  line-height: 15px;
  font-size: small;
}
ul {
  list-style: none;
  li:not(:last-child) {
    margin-bottom: 5px;
  }
}
</style>
