<template>
  <b-container class="p-5" style="text-align:center;">
    <b-container class="p-3">
      <b-form-input v-model="Query" placeholder="Search Anime"></b-form-input>
    </b-container>

    <b-row class="searchResult" style="justify-content:center;">
      <b-col
        v-for="result in Result"
        :key="result.data.id.raw"
        class="animeBox"
        cols="3"
        v-on:click="getAnime(result.data.anime_id.raw)"
      >
        <h4>{{ result.data.name.raw }}</h4>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
var ElasticAppSearch = require("@elastic/app-search-javascript");
var client = ElasticAppSearch.createClient({
  searchKey: process.env.VUE_APP_SEARCH_KEY,
  endpointBase: process.env.VUE_APP_URL,
  engineName: "anime-dataset",
});

export default {
  name: "Home",
  data() {
    return {
      Result: "",
      Query: "",
      Anime: "",
    };
  },
  components: {},
  methods: {
    // Searching the Query
    search() {
      if (this.Query != "") {
        var options = {
          search_fields: { name: {} },
          result_fields: {
            id: { raw: {} },
            name: { raw: {} },
            anime_id: { raw: {} },
          },
        };
        client
          .search(this.Query, options)
          .then((resultList) => {
            this.Result = resultList.results;
          })
          .catch((error) => {
            console.log(`error: ${error}`);
          });
      } else {
        this.Result = "";
      }
    },
    // Going to the Anime Details View
    getAnime(ID) {
      this.$router.push(`/anime/${ID}`);
    },
  },
  watch: {
    Query: function() {
      this.search();
    },
  },
};
</script>

<style>
.animeBox {
  border: 2.5px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
.searchResult {
  padding: 5px;
  margin: 5px;
}
.animeBox:hover {
  cursor: pointer;
}
</style>
