<script>
import MainNavigation from '@/components/MainNavigation.vue';

export default {
  components: {
    Navigation: MainNavigation
  }
};
</script>

<template>
  <Navigation />
  <section class="hero">
    <div class="main-img">
      <div class="hero-title-content">
        <div class="hero-text d-flex flex-column align-items-center text-white">
          <h5 class="sub-text fst-italic"><span>Ezzy</span> Hotel</h5>
          <h3 class="text-uppercase fw-normal">Accomodation</h3>
        </div>
      </div>
    </div>
  </section>
  <section class="accomodation">
    <div class="accomodation-listing">
      <div class="cbp-filters py-4 d-flex justify-content-center">
        <a href="" class="cbp-filter-item px-2"> Semua</a>
        <a href="" class="cbp px-3">Regular Rooms</a>
        <a href="" class="cbp px-3">Suite Rooms</a>
        <a href="" class="cbp px-3">Villa</a>
        <a href="" class="cbp px-3">Premium</a>
      </div>
      <div class="list-room py-4">
        <div class="regular">
          <div class="row">
            <h2 class="pt-3 pb-1 fs-3">Regular Room</h2>
            <p class="sub-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptates nisi
              tenetur, in vitae ab cupiditate earum illum officiis veritatis?
            </p>
            <div>
              <div class="regular-room d-flex">
                <div class="row">
                  <div class="col-7">
                    <img src="@/assets/img/accomodation/room02.jpg" alt="" />
                  </div>
                  <div class="col-4 info-room py-4">
                    <h3>Superior Room</h3>
                    <div class="info">
                      <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 108 sqm</p>
                      <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                      <p class="text">
                        2 flat screen TV (in bedroom and livingroom), wardrobe, bed side tables,
                        mini bar, Safety Deposit Box (SDB), air conditioner, standing lamps, working
                        desk, dressing table, luggage rack, tea and coffee making facilities,
                        vanity, ensuite bathroom with bathub, livingroom completed with sofas, flat
                        screen TV, minibar and kitchenette.
                      </p>
                    </div>
                    <button class="custom-btn">Check In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-img {
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url('@/assets/img/accomodation/room01.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 25%;
  padding-bottom: -30%;
}
.hero-text {
  margin-top: -12rem;
}
.hero-text h3 {
  font-size: 3rem;
}
.sub-text {
  font-size: 2rem;
  font-family: 'Courgette', sans-serif;
}
.sub-text span {
  color: orange;
}
.accomodation-listing {
  padding-inline: 12rem;
}
.cbp-filters {
  border-bottom: 2px solid gray;
}
.cbp-filters a {
  text-decoration: none;
  color: gray;
  font-size: 18px;
}
.cbp-filters a:hover {
  color: black;
}
.cbp-filter-item {
  border-right: 1.2px solid gray;
}
.col-7 img {
  width: 100%;
}
.regular-room {
  border: 0.5px solid gray;
}
.info-room h3 {
  font-family: 'bebas neue', sans-serif;
  letter-spacing: 2px;
}
.row h2 {
  font-family: 'bebas neue', sans-serif;
  letter-spacing: 2px;
}
.sub-title {
  font-size: 14px;
  color: gray;
}
.info-room .info {
  margin-top: 2rem;
  font-size: 14px;
}
.info p {
  margin-bottom: 5px;
}
.info .text {
  padding-left: 1.4rem;
  font-size: 12px;
}
.custom-btn {
  color: #fff;
  background: black;
  margin-top: 2rem;
  width: 50%;
  font-family: 'bebas neue', sans-serif;
  letter-spacing: 2px;
  transition: all 500ms;
  cursor: pointer;
  border-radius: 8px;
}
.custom-btn:hover {
  background: #fff;
  color: black;
  border: 2px solid black;
}
@media screen and (max-width: 768px) {
  .main-img {
    padding-top: 100%;
  }
  .hero-text h3 {
    font-size: 2rem;
  }
  .sub-text {
    font-size: 1.5rem;
  }
}
</style>
