import { createRouter, createWebHistory } from 'vue-router';
import ContactPage from '@/views/ContactPage.vue';
import LandingPage from '@/views/LandingPage.vue';
import NotFound from '@/views/NotFound.vue';
import AccomodationPage from '@/views/AccomodationPage.vue';
import DinningPage from '@/views/DinningPage.vue';
import WeddingPage from '@/views/WeddingPage.vue';
import PoolsPage from '@/views/PoolsPage.vue';

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
      path: '/dining',
      component: DinningPage
    },
    {
      path: '/contact',
      component: ContactPage
    },
    {
      path: '/wedding',
      component: WeddingPage
    },
    {
      path: '/accomodation',
      component: AccomodationPage
    },
    {
      path: '/pools',
      component: PoolsPage
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
});

export default router;
