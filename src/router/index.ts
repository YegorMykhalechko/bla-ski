import { createRouter, createWebHistory } from 'vue-router'
import EventsView from "../views/EventsView.vue"
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import CreateEventView from "../views/createEventView.vue"
import { useLoginStore } from '@/stores/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/create',
      name: 'createEvent',
      component: CreateEventView,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, from) => {
  const store = useLoginStore();
  if(to.meta.requiresAuth && !store.isLogin){
    return {name: 'login'}
  }
})

export default router
