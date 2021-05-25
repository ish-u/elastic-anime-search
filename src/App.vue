<template>
  <b-container id="app">
    <b-container @click="goHome" class="p-3" style="text-align:center">
      <h2>Search Anime</h2>
    </b-container>
    <router-view />
  </b-container>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style></style>
