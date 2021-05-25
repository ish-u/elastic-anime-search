<template>
  <div class="home">
    <input type="text" v-model="Query" />
    {{ Query }}
    <ul v-for="result in Result" :key="result.data.id.raw">
      <li v-on:click="getAnime(result.data.anime_id.raw)">
        {{ result.data.name.raw }}
      </li>
    </ul>
  </div>
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
.home {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
