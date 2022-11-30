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
  <div class="container">
    <ul>
      <li>
        {{ info.name }} , {{ info.original_name }} ,
        {{ info.original_language }} ,
        {{ info.vote_average }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
