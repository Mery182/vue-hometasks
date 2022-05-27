import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../views/FirstBlok.vue'
import SecondPage from '../views/SecondPage.vue'
import ThirdPage from '../views/ThirdPage.vue'
import FourthPage from '../views/FourthPage'
import FivePage from '../views/FivePage'
import FinalPage from '../views/FinalPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: FirstPage
    
  },
  {
    path: '/second',
    name: 'second',
    component: SecondPage

  },
  {
    path: '/third',
    name: 'third',
    component: ThirdPage

  },
  {
    path: '/fourth',
    name: 'fourth',
    component: FourthPage

  },
  {
    path: '/five',
    name: 'five',
    component: FivePage

  },
  {
    path: '/final',
    name: 'final',
    component: FinalPage

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
