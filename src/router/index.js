import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllCourses from "../views/CoursesViews/AllCourses.vue";
import ActiveCourses from "../views/CoursesViews/ActiveCourses.vue";
import ArchiveCourses from "../views/CoursesViews/ArchiveCourses.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/courses",
      name: "courses",
      children: [
        { path: "AllCourses", component: AllCourses },
        {
          path: "ActiveCourses",
          component: ActiveCourses,
        },
        {
          path: "ArchiveCourses",
          component: ArchiveCourses,
        },
      ],

      // route level code-splitting
      // this generates a separate chunk (courses.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CoursesView.vue"),
    },
  ],
});

export default router;
