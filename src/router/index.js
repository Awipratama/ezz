import { createRouter, createWebHistory } from 'vue-router';
import ContactPage from '@/views/ContactPage.vue';
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
      path: '/accomodation',
      component: AccomodationPage
    },
    {
      path: '/contact',
      component: ContactPage
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
});

export default router;
