<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <div class="container d-flex justify-content-between mt-2">
    <h1 class="text-danger">Boolfix</h1>
    <form class="d-flex">
      <input
        class="form-control form-control-sm w-auto"
        type="text"
        placeholder="Search Title "
      />
      <button type="button" class="btn text-white btn-dark">Search</button>
    </form>
  </div>
</template>

<style lang="scss">
button {
  margin-left: 10px;
}
</style>
