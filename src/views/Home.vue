<template>
  <div class="home">
    <input type="text" v-model="Query" />
    {{ Query }}
    <ul v-for="result in Result" :key="result.data.id.raw">
      <li>{{ result.data.name.raw }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
var ElasticAppSearch = require("@elastic/app-search-javascript");
var client = ElasticAppSearch.createClient({
  searchKey: "search-qhqmnkqi98jfygetrg5b1tny",
  endpointBase: "https://test-a53db8.ent.asia-south1.gcp.elastic-cloud.com",
  engineName: "anime-dataset",
});
export default {
  name: "Home",
  data() {
    return {
      Result: "",
      Query: "",
    };
  },
  components: {},
  methods: {
    getData() {
      if (this.Query != "") {
        var options = {
          search_fields: { name: {} },
          result_fields: { id: { raw: {} }, name: { raw: {} } },
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
  },
  watch: {
    Query: function() {
      this.getData();
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
