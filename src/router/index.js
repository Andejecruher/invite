import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import { RouterLink } from "vue-router";

const routes = [
  {
    path: '/:token',
    name: 'home',
    component: HomeView
  },
  {
    path: "/:catchAll(.*)", // Captura cualquier ruta que no coincida
    name: "NotFound",
    component: <RouterLink to={"/default"}>NotFound</RouterLink>, // Cambia "/ruta-de-redireccion" por la ruta a la que deseas redirigir
    props: { to: "/default" } // Cambia "/ruta-de-redireccion" por la ruta a la que deseas redirigir
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
