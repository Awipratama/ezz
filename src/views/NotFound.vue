<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
  components: {
    Navigation: MainNavigation,
    MainFooter: MainFooter
  }
};
</script>

<template>
  <Navigation />
  <section class="hero">
    <div class="notfound d-flex flex-column align-items-center">
      <h1 class="main-title pt-5">404</h1>
      <h3><strong>Ooops!</strong> Page Not Found!</h3>
      <p class="text-center">
        The Page you are looking for, might have been removed had it's Name Changed or is
        temporarily unavailable.
        <router-link to="/" class="anchor">Return to Landing Page?</router-link>
      </p>
    </div>
  </section>
  <MainFooter />
</template>

<style scoped>
.hero {
  overflow: hidden;
  height: 100vh;
  position: relative;
}
.notfound {
  width: 50%;
  height: 60vh;
  margin-top: 8rem;
  margin-left: 22.5rem;
}
.main-title {
  font-size: 16rem;
  font-weight: 600;
  font-style: italic;
  color: #ffa500;
}
h3 {
  font-weight: 500;
  margin-bottom: 30px;
}
h3 strong {
  color: #ed117f;
}
@media screen and (max-width: 768px) {
  .notfound {
    width: 100%;
    margin-left: 0;
    margin-top: 12rem;
  }
  .main-title {
    font-size: 8rem;
  }
  h3 {
    font-size: 1rem;
  }
  p {
    font-size: 10px;
  }
  .anchor {
    font-size: 10px;
  }
}
</style>
