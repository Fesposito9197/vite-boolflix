<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  methods: {
    refresh() {
      window.location.reload();
    },
  },
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between pt-2">
      <img @click="refresh" src="../assets/boolflix_logo.png" alt="Boolfix" />
      <!-- <h1 class="text-danger" @click="refresh">BOOLFIX</h1> -->
      <form
        class="d-flex align-items-centerme-1 pb-1"
        @submit.prevent="$emit('search')"
      >
        <input
          class="form-control form-control-sm w-auto me-2"
          type="text"
          placeholder="Search Title "
          v-model="store.searchText"
        />
        <button type="submit" class="my-button">Search</button>
      </form>
    </div>
  </header>
</template>

<style lang="scss">
// h1 {
//   color: #e50914;
// }
img {
  cursor: pointer;
}
.my-button {
  background: transparent;
  color: #e50914;
  font-weight: 400;
  text-transform: uppercase;
  padding: 16px 36px;
  border: 2px solid #e50914;
  border-radius: 32px;
  transform: translate(0);
  overflow: hidden;
  cursor: pointer;
}
.my-button::before {
  content: "";
  position: absolute;
  background: #e50914;
  width: 8px;
  top: 0;
  bottom: 0;
  left: -32px;
  transform: rotate(-16deg);
  filter: blur(6px);
}
.my-button:hover::before {
  left: calc(100% + 32px);
  transition: 0.75s;
}
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
