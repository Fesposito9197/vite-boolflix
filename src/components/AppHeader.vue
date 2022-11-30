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
  <header>
    <div class="container d-flex justify-content-between pt-2">
      <h1 class="text-danger">Boolfix</h1>
      <form class="d-flex me-1 pb-1" @submit.prevent="$emit('search')">
        <input
          class="form-control form-control-sm w-auto me-2"
          type="text"
          placeholder="Search Title "
          v-model="store.searchText"
        />
        <button type="submit" class="btn text-white btn-danger">Search</button>
      </form>
    </div>
  </header>
</template>

<style lang="scss">
header {
  background-color: black;
}
h1 {
  cursor: pointer;
}
button {
  margin-left: 10px;
}
</style>
