<template>
  <b-container v-if="!isLoading" style="justify-content:center">
    <b-row style="text-align:center">
      <b-col>
        <h1>{{ animeDetails.title }}</h1>
        <h5>{{ animeDetails.premiered }}</h5>
        <h6>
          <b>
            Status: {{ animeDetails.status }} | Rank :
            {{ animeDetails.ranked }} | Popularity:
            {{ animeDetails.popularity }}
          </b>
        </h6>
        <h6>
          <b>
            Score : {{ animeDetails.score }} ( {{ animeDetails.scoreStats }})</b
          >
        </h6>
      </b-col>
      <hr />
    </b-row>
    <b-row style="text-align:center">
      <b-col>
        <img
          :src="animeDetails.picture"
          style="margin:10px;border: 2px solid black; border-radius:5px"
        />
      </b-col>
      <b-col>
        <p>{{ animeDetails.synopsis }}</p>
      </b-col>
    </b-row>
    <br />
    <h2>Trailer</h2>
    <hr />
    <b-row style=" margin:20px">
      <iframe width="420" height="345" :src="animeDetails.trailer"> </iframe>
    </b-row>

    <br />
    <h2>Character</h2>
    <hr />

    <b-row style="text-align:center">
      <b-col
        cols="3"
        v-for="character in animeDetails.characters"
        :key="character.name"
        ><img
          style="height:40vh; margin:10px;border: 2px solid black; border-radius:5px"
          :src="character.picture"
          alt=""
          srcset=""
        />
        <br />
        <h5>
          <a
            style="text-decoration:none; color: black"
            :href="character.link"
            >{{ character.name }}</a
          >
        </h5>
      </b-col>
    </b-row>
  </b-container>
  <b-container v-else class="p-5">
    <div style="text-align:center">
      <b-spinner></b-spinner>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    ID: String,
  },
  data() {
    return {
      animeDetails: Object,
      isLoading: true,
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
          this.isLoading = false;
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
