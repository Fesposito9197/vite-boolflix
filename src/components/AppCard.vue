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
};
</script>

<template>
  <ul>
    <li>
      {{ info.title }} {{ info.name }}, {{ info.original_title }}
      {{ info.original_name }}, {{ info.original_language }} ,
      {{ info.vote_average }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
