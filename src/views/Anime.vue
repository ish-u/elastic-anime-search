<template>
  <div>
    {{ ID }}
    {{ animeDetails }}
  </div>
</template>

<script>
export default {
  props: {
    ID: String,
  },
  data() {
    return {
      animeDetails: Object,
    };
  },
  methods: {
    // Getting the Data of the Anime whose ID was passed using the prop ID
    getAnime() {
      const requestOptions = {
        method: "GET",
      };
      fetch(`${process.env.VUE_APP_ANIME_DATA}${this.ID}`, requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          this.animeDetails = jsonResponse;
          console.log(jsonResponse);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAnime();
  },
};
</script>

<style></style>
