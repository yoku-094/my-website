import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Top from "../components/Top.vue";
import Work from "../components/Work.vue";
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/my-website",
    name: "Home",
    component: Home,
  },
  {
    path: "/my-website/top",
    name: "Top",
    component: Top,
  },
  {
    path: "/my-website/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/my-website/about",
    name: "About",
    component: About,
  },
  {
    path: "/my-website/blog",
    name: "Work",
    component: Blog,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
