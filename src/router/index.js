import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../pages/home-page.vue'
import productPage from '../pages/products-page.vue'
import categoriesPage from '../pages/categories-page.vue'
import aboutPage from '../pages/about-page.vue'
import contactPage from '../pages/contact-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/products',
      name: 'products',
      component: productPage
    },
    {
      path: '/categories',
      name: 'categories',
      component: categoriesPage
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contactPage
    },
  ]
})

export default router
