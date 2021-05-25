import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Anime from "../views/Anime.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/anime/:ID",
    name: "Anime",
    component: Anime,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
