<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  components: {
    Navigation: MainNavigation,
    MainFooter: MainFooter
  },
  data() {
    return {
      facilityMasonry: null
    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<template>
  <Navigation active="home" />
  <section class="hero">
    <video autoplay muted loop class="w-100 h-100 hero-video">
      <source src="@/assets/video/highlight.mp4" type="video/mp4" />
    </video>
    <div class="hero-text-content-wrapper">
      <div class="hero-text-content">
        <h2 class="hero-welcome">Welcome to</h2>
        <h1 class="hero-brand pb-4">
          <span class="hero-brand-ezzy">Ezzy</span>

          <span class="ms-3 hero-brand-hotel">Hotel</span>
        </h1>
        <router-link to=""><button class="btn text-white">Let's Get Started</button></router-link>
      </div>
    </div>
  </section>
  <section class="about container">
    <div class="row">
      <div
        class="col-lg-6 col-12 text-capitalize text-center d-flex flex-column justify-content-center"
      >
        <div class="px-5">
          <h3 class="about-brand">Ezzy hotel</h3>
          <h1 class="about-welcome-title">Welcome</h1>
          <div class="text-center about-content">
            <p>
              Overviewing the stunning Jimbaran Bay, 15 minutes from Ngurah Rai International air
              port 10 minutes to Uluwatu Temple, Dreamland Beach, Pandawa Beach, Jimbaran Fish
              restaurant, New Kuta Water park, New Kuta Golf course, and 2 minutes to Garuda Wisnu
              Kencana.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-12 mx-auto">
        <div class="about-img">
          <img src="@/assets/img/landing-page/about-img.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="discover-head">
      <div class="discover-text">Discover</div>
      <h1>Our place</h1>
    </div>
    <div class="discover-place container">
      <div class="row w-100 gx-5 gy-4 m-0">
        <div class="col-lg-4 col-12">
          <div class="shadow p-3 py-4 rounded">
            <div class="w-100">
              <img
                src="@/assets/img/landing-page/rooftop-wedding-chapel.jpg"
                class="w-100 rounded"
              />
            </div>
            <div>
              <h4 class="text-uppercase my-3">Rooftop Wedding Chapel</h4>
              <div class="discover-content-text">
                If you are looking Rooftop Wedding ceremony, tying your knot in Bali, will be even
                more memorable in the brand new Roof Top wedding chapel with a stunning 360 views
                over Bali and Jimbaran Bay. get ready to explore a new life of togetherness. You
                will be able to celebrate your day with confidence.
              </div>
              <div class="discover-learn-more">
                <span class="me-2">Learn more</span>
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="shadow px-3 py-4 rounded">
            <div class="w-100">
              <img src="@/assets/img/accomodation/room01.jpg" class="w-100 rounded-2" />
            </div>
            <div>
              <h4 class="text-uppercase my-3">EZZY Rooms & Suites</h4>
              <div class="discover-content-text">
                The 200 Rooms & Suites are designed with innovative elements in all aspects of the
                room, with dedicated flexible workspaces, Free Wi-Fi in all area, private balcony
                32" LED TV, in room Minibar and Safe deposit box.
              </div>
              <div class="discover-learn-more">
                <span class="me-2">Learn more</span>
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="shadow px-3 py-4 rounded">
            <div class="w-100">
              <img src="@/assets/img/landing-page/rooftop.jpg" class="w-100 rounded" />
            </div>
            <div>
              <h4 class="text-uppercase my-3">Ezzy Rooftop Lounge & Dining</h4>
              <div class="discover-content-text">
                Located on the top of the hill of Bali with incredible views over Bali Bay and the
                North of Bali, the highest hotel in Bali, Ezzy Hotel Bali, is offering an amazing
                spot on its rooftop with stylish lounge sittings and innovative bar and culinary
                menus along with seductive phonic infrastructure.
              </div>
              <div class="discover-learn-more">
                <span class="me-2">Learn more</span>
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="shadow rounded px-3 py-4">
            <div class="w-100">
              <img src="@/assets/img/landing-page/pool.jpg" class="w-100 rounded" />
            </div>
            <div>
              <h4 class="text-uppercase my-3">Adult & Kid's Pool</h4>
              <div class="discover-content-text">
                For those who are travelling with children, families can enjoy the famous Ezzy Kid's
                Club that provides a safe and entertaining environment where children can play and
                learn at the some time with the professional play ers that will take care of them.
              </div>
              <div class="discover-learn-more">
                <span class="me-2">Learn more</span>
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 facility">
    <div class="facility-head">
      <div>Discover</div>
      <h1 class="mb-4">Our Facility</h1>
    </div>
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-8 col-12">
          <div class="row gy-4">
            <div class="col-md-6 col-12 position-relative">
              <div class="facility-img-wrapper">
                <img
                  src="@/assets/img/landing-page/restaurant.jpg"
                  class="w-100 facility-img-height-expand"
                />
              </div>
              <div class="facility-name">Restaurant</div>
            </div>
            <div class="col-md-6 col-12 position-relative">
              <div class="facility-img-wrapper">
                <img
                  src="@/assets/img/landing-page/meeting-room.jpg"
                  class="w-100 facility-img-height-expand shadow"
                />
              </div>
              <div class="facility-name">Meeting room</div>
            </div>
            <div class="col-12 position-relative">
              <div class="facility-img-wrapper">
                <img
                  src="@/assets/img/landing-page/bar.jpg"
                  class="w-100 facility-img-height-short"
                />
              </div>
              <div class="facility-name">Cafe & Bar</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="row gy-4">
            <div class="col-12 position-relative">
              <div class="facility-img-wrapper">
                <img src="@/assets/img/landing-page/gym.jpg" class="w-100" />
              </div>
              <div class="facility-name">Fitness center</div>
            </div>
            <div class="col-12 position-relative">
              <div class="facility-img-wrapper">
                <img src="@/assets/img/landing-page/kids-club.jpg" class="w-100" />
              </div>
              <div class="facility-name">Kids club</div>
            </div>

            <div class="col-12 position-relative">
              <div class="facility-img-wrapper">
                <img
                  src="@/assets/img/landing-page/boutique.jpg"
                  style="object-position: top"
                  class="w-100 facility-img-height-expand-2"
                />
              </div>
              <div class="facility-name">Boutique</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="booking">
    <div class="container">
      <div class="custom-card shadow w-100">
        <div class="row justify-content-around">
          <div class="col-2">
            <h5 class="input-text">Date</h5>
            <input type="datetime-local" name="Date" placeholder="Date" class="booking-input" />
          </div>
          <div class="col-2">
            <h5 class="input-text">Check-in</h5>
            <input
              type="datetime-local"
              name="Checkin"
              placeholder="*Check-in"
              class="booking-input"
            />
          </div>
          <div class="col-2">
            <h5 class="input-text">Check-out</h5>
            <input
              type="datetime-local"
              name="Checkout"
              placeholder="*Check-out"
              class="booking-input"
            />
          </div>
          <div class="col-2">
            <h5 class="input-text">Promo Code</h5>
            <input type="number" name="Name" placeholder="*Promo Code" class="booking-input" />
          </div>
          <div class="col-2">
            <router-link to=""><button class="booking-button">Book Now</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MainFooter />
</template>

<style scoped>
.hero {
  overflow: hidden;
  color: white;
  height: max-content;
  position: relative;
}

.hero-video {
  filter: brightness(0.4);
  width: calc(100% + 10px);
}

.hero-text-content {
  text-align: center;
}

.hero-text-content-wrapper {
  padding: 20px 0;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
}

.hero-welcome {
  font-size: clamp(1rem, 5vw + 0.5rem, 3rem);
  font-family: 'Courgette', sans-serif;
  font-weight: 600;
  position: relative;
  margin-bottom: -8px;
  animation: 1s forwards welcome-showup;
}

@keyframes welcome-showup {
  0% {
    opacity: 0;
    top: -20px;
  }

  50% {
    opacity: 1;
  }

  100% {
    top: 0;
  }
}

.hero-brand {
  text-transform: capitalize;
  font-size: clamp(1.5rem, 10vw + 0.5rem, 4.5rem);
  font-weight: 500;
  vertical-align: middle;
}

.hero-brand-ezzy {
  /* color: orange; */
  font-weight: 600;
  position: relative;
  animation: 2s 1s forwards hero-ezzy-showup;
  opacity: 0;
}

@keyframes hero-ezzy-showup {
  0% {
    color: white;
    left: -50px;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    left: 0;
    opacity: 1;
    color: orange;
  }
}

.hero-brand-hotel {
  position: relative;
  animation: 2s 1s forwards hero-hotel-showup;
  opacity: 0;
}

@keyframes hero-hotel-showup {
  0% {
    right: -50px;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    right: 0;
    opacity: 1;
  }
}

.about {
  padding-block: 100px;
}

.about-brand {
  font-size: clamp(1.5rem, 0.5rem + 4vw, 2.3rem);
  font-family: 'Courgette', sans-serif;
  color: #ed117f;
}

.about-welcome-title {
  text-transform: uppercase;
  font-size: clamp(2rem, 0.5rem + 8vw, 3.5rem);
  position: relative;
  font-weight: 600;
  padding-bottom: 8px;
  margin-bottom: 20px;
}

.about-welcome-title::before {
  position: absolute;
  content: '';
  background-color: black;
  width: 25%;
  border-radius: 8px;
  height: 5px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
}

.about-content p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 2.1;
  color: #666666;
}

.about-img {
  width: 100%;
  max-width: 450px;
  margin-inline: auto;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
}

.about-img > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 300ms;
}

.about-img > img:hover {
  transform: scale(1.2);
}

.discover-head {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('@/assets/img/landing-page/discover.jpg');
  background-position: center;
  padding: 80px 10px;
  background-repeat: no-repeat;
  transition: all 500ms;
  background-attachment: fixed;
  margin-bottom: 30px;
}

.discover-head :nth-child(1) {
  font-size: clamp(1.5rem, 0.5rem + 4vw, 2.5rem);
  font-weight: 600;
  color: rgb(236, 30, 133);
  font-family: 'Courgette', 'sans-serif';
}

.discover-head :nth-child(2) {
  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(2rem, 0.5rem + 8vw, 3rem);
}

.discover-place img {
  aspect-ratio: 5/3;
  object-fit: cover;
}

.discover-learn-more {
  font-weight: 600;
  font-size: 0.85rem;
  color: #666666;
  margin-top: 10px;
}

.discover-content-text {
  font-size: 0.85rem;
  color: #666666;
  line-height: 1.7;
}

.facility {
  background-color: #f3efea;
}

.facility img {
  object-fit: cover;
  filter: brightness(0.8);
  border-radius: 8px;
  aspect-ratio: 460/307;
}

.facility-head {
  text-align: center;
}

.facility-head :nth-child(1) {
  font-size: clamp(1rem, 0.5rem + 5vw, 2rem);
  font-weight: 600;
  color: rgb(236, 30, 133);
  font-family: 'Courgette', 'sans-serif';
}

.facility-head :nth-child(2) {
  font-weight: 700;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 0.5rem + 8vw, 2.5rem);
}

.facility-img-height-expand {
  aspect-ratio: 460/660 !important;
}

.facility-img-height-expand-2 {
  aspect-ratio: 460/437 !important;
}

.facility-img-height-short {
  aspect-ratio: 460/205 !important;
}

.facility-name {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.3rem);
  width: max-content;
  max-width: 100%;
  color: #5f5753;
  text-transform: uppercase;
  font-weight: 600;
  background-color: rgba(255, 251, 251, 0.922);
  padding: 10px 20px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  transition: all 500ms;
}

.facility-name:hover {
  background-color: #ed117fed;
  color: white;
}

.facility-img-wrapper {
  overflow: hidden;
}

.facility-img-wrapper img {
  transition: all 500ms;
}

.facility-img-wrapper img:hover {
  transform: scale(1.2);
}

.btn {
  background: linear-gradient(80deg, #ffa500, orangered);
  border-radius: 15px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
}
.btn:hover {
  background: linear-gradient(120deg, orange, red);
}
.custom-card {
  padding-left: 50px;
}
.custom-card {
  padding: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* box-shadow: 1px 3px 0 3px gray; */
}
.booking-input {
  padding: 8px;
  border-radius: 8px;
}
.input-text {
  font-weight: 400;
  font-size: 16px;
}
.booking-button {
  width: 100%;
  padding: 8px;
  background: black;
  color: white;
  border-radius: 8px;
  margin-top: 27px;
  transition: all 500ms;
}
.booking-button:hover {
  background: white;
  color: black;
}
@media only screen and (min-width: 500px) {
  .hero-text-content {
    margin-top: -50px;
  }
}
</style>
