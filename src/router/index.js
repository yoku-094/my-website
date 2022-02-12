import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Work from "../components/Work.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/my-website",
    name: "Home",
    component: Home,
  },
  {
    path: "/my-website/work",
    name: "Work",
    component: Work,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
