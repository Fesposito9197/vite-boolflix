<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container d-flex justify-content-between mt-2">
    <h1 class="text-danger">Boolfix</h1>
    <form class="d-flex me-1" @submit.prevent="$emit('search')">
      <input
        class="form-control form-control-sm w-auto me-2"
        type="text"
        placeholder="Search Title "
        v-model="store.searchText"
      />
      <button type="submit" class="btn text-white btn-dark">Search</button>
    </form>
  </div>
</template>

<style lang="scss">
button {
  margin-left: 10px;
}
</style>
