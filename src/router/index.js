import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import MovieDetails from "@/views/MovieDetails.vue";
import ActorsDetails from "@/views/ActorsDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/movie/:id",
    name: "movie-detail",
    component: MovieDetails
  },
  {
    path: "/actors/:id",
    name: "actors-details",
    component: ActorsDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
