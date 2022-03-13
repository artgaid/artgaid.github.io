import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
    },
    {
      path: "/сontacts",
      name: "сontacts",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactsView.vue"),
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
      path: "/:pathMatch(.*)*",
      name: "Page404",
      component: () => import("../views/404View.vue"),
    },
  ],
});

export default router;
