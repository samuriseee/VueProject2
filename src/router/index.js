import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Secret from "../layout/secret.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => 
      import("../views/Blogs.vue"),
  },
  {
    path:"/blogs/:id",
    component:() => 
      import('../views/BlogsDetail.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'unauth'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      layout: Secret
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
