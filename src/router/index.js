import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import NotFound from '@/views/NotFound.vue';
import AccomodationPage from '@/views/AccomodationPage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    },
    {
      path: '/accomodation',
      component: AccomodationPage
    }
  ]
});

export default router;
