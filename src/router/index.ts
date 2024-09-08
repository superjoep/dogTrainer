import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import homePage from "../views/HomePage.vue";
import lessonSubject from "../views/lessonSubject.vue";

export const routeNames = {
  lessonSubject: "lessonSubject",
};
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: homePage,
  },
  {
    path: "/lessonsubject/:id",
    name: routeNames.lessonSubject,
    component: () => lessonSubject,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
