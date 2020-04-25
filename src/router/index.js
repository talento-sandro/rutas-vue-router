import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto'
import Usuarios from '../views/Usuarios.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Productos from '../views/productos/Index.vue'
import Detalle from '../views/productos/Detalle.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
    { path: '/contacto', name: 'Contacto', component: Contacto },
    { path: '/usuarios/:id', name: 'usuarios', component: Usuarios },
    { path: '/login', name: 'login', component: Login },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/registrarse', redirect: '/signup' },
    { path: '/productos', name: 'productos', component: Productos },
    { path: '/producto-detalle/:id', name: 'producto', component: Detalle }  // con parámetro :id
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
