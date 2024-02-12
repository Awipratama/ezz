<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainBooking from '@/components/MainBooking.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  components: {
    Booking: MainBooking,
    Navigation: MainNavigation,
    MainFooter: MainFooter
  }
};
</script>

<template>
  <Navigation />
  <section class="hero text-center">
    <h4 class="sub-title"><span>Ezzy</span> Hotel</h4>
    <h1 class="title-hero">Adult & Kid's Pool</h1>
    <div class="container">
      <p class="sub-text">
        For those who are travelling with children, families can enjoy the famous Ezzy Kid's Club
        that provides a safe and entertaining environment where children can play and learn at the
        some time with the professional play ers that will take care of them.
      </p>
    </div>
  </section>
  <section class="pool-experience">
    <div class="container">
      <h5 class="pool-experience-title text-center py-5 fs-2 text-uppercase">Pool Experience</h5>
      <div class="pool-experience-content-wrapper">
        <div class="row gy-4 mt-5 pb-4 shadow">
          <div class="col-lg-6 col-12 pool-experience-img-wrapper">
            <img src="@/assets/img/pools/pools01.jpg" alt="bar" class="w-100 rounded" />
          </div>
          <div class="col-lg-6 col-12 pool-experience-content">
            <h5 class="content-title">Adult's Pool</h5>
            <div class="content-description">
              Ut elementum pretium ligula, in convallis elit consequat nec. Vestibulum et lorem
              tristique, varius libero venenatis, tincidunt metus. Duis auctor leo augue, eu egestas
              ligula feugiat vel. In tempor sapien eu felis molestie, eu sodales est ultricies. Sed
              auctor augue urna, quis sagittis nibh elementum nec. Maecenas vulputate pretium lacus,
              vel dictum orci porta eget. Praesent id pharetra neque. Nunc non sodales erat. Sed
              tempus tincidunt eros sit amet sodales. Sed eu pretium elit, vel hendrerit nulla. In
              hac habitasse platea dictumst. Integer consequat nulla at dolor tristique, a feugiat
              ante faucibus. Sed nec bibendum nisl.
            </div>
          </div>
        </div>
        <div class="row gy-4 mt-5 pb-4 shadow">
          <div class="col-lg-6 col-12 pool-experience-img-wrapper">
            <img src="@/assets/img/pools/pools02.jpg" alt="bar" class="w-100 rounded" />
          </div>
          <div class="col-lg-6 col-12 pool-experience-content">
            <h5 class="content-title">Kid's Pool</h5>
            <div class="content-description">
              Ut elementum pretium ligula, in convallis elit consequat nec. Vestibulum et lorem
              tristique, varius libero venenatis, tincidunt metus. Duis auctor leo augue, eu egestas
              ligula feugiat vel. In tempor sapien eu felis molestie, eu sodales est ultricies. Sed
              auctor augue urna, quis sagittis nibh elementum nec. Maecenas vulputate pretium lacus,
              vel dictum orci porta eget. Praesent id pharetra neque. Nunc non sodales erat. Sed
              tempus tincidunt eros sit amet sodales. Sed eu pretium elit, vel hendrerit nulla. In
              hac habitasse platea dictumst. Integer consequat nulla at dolor tristique, a feugiat
              ante faucibus. Sed nec bibendum nisl.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Booking />
  </section>
  <MainFooter />
</template>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url('@/assets/img/pools/pool.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  color: white;
  padding-top: 150px;
  padding-bottom: 150px;
}
.sub-title {
  font-style: italic;
  font-family: 'courgette', sans-serif;
  margin-bottom: -8px;
}
.sub-title span {
  color: orange;
}
.title-hero {
  font-size: 3rem;
  margin-top: 10px;
  text-transform: uppercase;
}
.sub-text {
  max-width: 700px;
  padding-inline: 1rem;
  margin-inline: auto;
  font-size: 1rem;
}
.pool-experience-img-wrapper img {
  aspect-ratio: 6/4;
  object-fit: cover;
}
.pool-experience {
  background-color: #f3efea;
  padding-top: 30px;
  padding-bottom: 20px;
}
.dining-experience-img-wrapper {
  overflow: hidden;
  border-radius: 8px;
  background-color: inherit;
  max-width: 100%;
}
.pool-experience-content {
  padding: 30px;
  margin-block: auto;
}
.row {
  background-color: rgba(239, 229, 223, 0.445);
}
.pool-experience-content-wrapper > .row:nth-child(even) .pool-experience-content {
  order: -1;
}
</style>
