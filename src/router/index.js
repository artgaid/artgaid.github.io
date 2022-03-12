import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/work-experience",
      name: "work",
      component: () => import("../views/WorkView.vue"),
    },
    {
      path: "/education",
      name: "education",
      component: () => import("../views/EducationView.vue"),
    },
    {
      path: "/technology-stack",
      name: "technology-stack",
      component: () => import("../views/TechnologyStackView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue"),
    },
  ],
});

export default router;
