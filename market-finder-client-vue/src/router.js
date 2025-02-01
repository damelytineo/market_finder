import { createRouter, createWebHistory } from 'vue-router'; 
import HomePage from "./views/HomePage.vue";
import LogIn from "./views/LogIn.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LogIn }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;