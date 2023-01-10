import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ResumeView.vue')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue')
    }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TestimonialsView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
