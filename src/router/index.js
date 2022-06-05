import Vue from 'vue'
import VueRouter from 'vue-router'
import RickAndMorty from "@/views/RickAndMorty";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'rickandmorty',
    component: RickAndMorty
  },
  // {
  //   path: 'nn/',
  //   name: 'nn',
  //   component: () => import(/* webpackChunkName: "nn" */ '../views/Nn')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
