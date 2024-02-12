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
      category: 'all'
    };
  },
  methods: {
    filter(category) {
      this.category = category;
    },
    isActive(category) {
      return this.category === 'all' || this.category === category;
    },
    addActiveClass(category) {
      return {
        active: this.category === category
      };
    }
  }
};
</script>

<template>
  <Navigation :noResponsivePad="true" active="accomodation" />
  <section class="hero">
    <div class="main-img">
      <div class="hero-title-content">
        <div class="hero-text d-flex flex-column align-items-center text-white">
          <h5 class="sub-text fst-italic"><span>Ezzy</span> Hotel</h5>
          <h3 class="hero-title-main">Accomodation</h3>
        </div>
      </div>
    </div>
  </section>
  <section class="accomodation">
    <div class="accomodation-listing">
      <div class="cbp-filters py-4 d-flex justify-content-center flex-wrap">
        <span class="cbp-filter-item px-2" @click="filter('all')" :class="addActiveClass('all')"
          >All</span
        >
        <span class="cbp px-3" @click="filter('regular')" :class="addActiveClass('regular')"
          >Regular Rooms</span
        >
        <span class="cbp px-3" @click="filter('suite')" :class="addActiveClass('suite')"
          >Suite Rooms</span
        >
        <span class="cbp px-3" @click="filter('honeymoon')" :class="addActiveClass('honeymoon')"
          >Honey moon</span
        >
        <span class="cbp px-3" @click="filter('bungalow')" :class="addActiveClass('bungalow')"
          >bungalow</span
        >
        <span class="cbp px-3" @click="filter('premium')" :class="addActiveClass('premium')"
          >Premium</span
        >
        <span class="cbp px-3" @click="filter('deluxe')" :class="addActiveClass('deluxe')"
          >Deluxe</span
        >
      </div>
      <div class="list-room py-4">
        <div class="regular" v-if="isActive('regular')">
          <div class="row">
            <h2 class="pt-3 pb-1 fs-3">Regular Room</h2>
            <p class="sub-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptates nisi
              tenetur, in vitae ab cupiditate earum illum officiis veritatis?
            </p>
            <div>
              <div class="regular-room d-flex">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room02.jpg" class="w-100 h-100" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Superior Room</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 108 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            2 flat screen TV (in bedroom and livingroom), wardrobe, bed side tables,
                            mini bar, Safety Deposit Box (SDB), air conditioner, standing lamps,
                            working desk, dressing table, luggage rack, tea and coffee making
                            facilities, vanity, ensuite bathroom with bathub, livingroom completed
                            with sofas, flat screen TV, minibar and kitchenette.
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
        <div class="suite" v-if="isActive('suite')">
          <div class="row">
            <h2 class="pt-3 pb-1 fs-3">Suite Rooms</h2>
            <p class="sub-title">
              Suites are designed with innovative elements in all aspects of the room, with
              dedicated flexible workspaces, Free Wi-Fi in all area, private balcony 32" LED TV, in
              room Minibar and Safe deposit box.
            </p>
            <div>
              <div class="regular-room d-flex">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room03.jpg" class="w-100 h-100" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>River Suite</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 108 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            2 flat screen tv's (in bedroom and livingroom), wardrobe, bed side
                            tables, mini bar, Safety Deposit Box (SDB), air conditioner, standing
                            lamps, working desk, dressing table, luggage rack, tea and coffee making
                            facilities, vanity, ensuite bathroom with bathub, livingroom completed
                            with sofas, flat screen tv, minibar and kitchenette, third level of 4th
                            building.
                          </p>
                        </div>
                        <button class="custom-btn">Check In</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="regular-room d-flex pt-5">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room03.jpg" class="w-100 h-100" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Presidential Suite</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 418 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            2 flat screen TV's (in bedroom and livingroom), wardrobe, bed side
                            tables, mini bar, Safety Deposit Box (SDB), air conditioner, standing
                            lamps, working desk, dressing table, luggage rack, tea and coffee making
                            facilities, vanity, ensuite bathroom with bathub, pateo beside the
                            livingroom, livingroom completed with sofas, flat screen tv, minibar and
                            kitchenette, top level of the 2nd building.
                          </p>
                        </div>
                        <button class="custom-btn">Check In</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="regular-room d-flex pt-5">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room03.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room py-4">
                        <h3>Family Suite</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 150 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            2 flat screen TV's (in bedroom and livingroom), wardrobe, bed side
                            tables, mini bar, Safety Deposit Box (SDB), air conditioner, standing
                            lamps, working desk, dressing table, luggage rack, tea and coffee making
                            facilities, vanity, ensuite bathroom with bathub, livingroom completed
                            with sofas, flat screen TV, minibar and kitchenette.
                          </p>
                        </div>
                        <button class="custom-btn">Check In</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="regular-room d-flex pt-5">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room03.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Junior Suite</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 108 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            flat screen TV, wardrobe, bed side tables, mini bar, Safety Deposit Box
                            (SDB), air conditioner, room completed with sofas, standing lamps,
                            working desk, dressing table, luggage rack, tea and coffee making
                            facilities, vanity, ensuite bathroom with bathub.
                          </p>
                        </div>
                        <button class="custom-btn">Check In</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="regular-room d-flex pt-5">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room03.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Ezzy Suite</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 108 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            2 flat screen TV (in bedroom and livingroom), wardrobe, bed side tables,
                            mini bar, Safety Deposit Box (SDB), air conditioner, standing lamps,
                            working desk, dressing table, luggage rack, tea and coffee making
                            facilities, vanity, ensuite bathroom with bathub, livingroom completed
                            with sofas, flat screen TV, minibar and kitchenette.
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
        <div class="honeymoon" v-if="isActive('honeymoon')">
          <div class="row">
            <h2 class="pt-3 pb-1 fs-3">Honeymoon</h2>
            <p class="sub-title">
              Five very eco-friendly villas, lovated at the edge of the resort, these one bedroom
              villas is completed with the livingroom, kitchenette, with all modern villa
              facilities. Some local and imported flowers are planted at the backyard of the villas.
            </p>
            <div>
              <div class="regular-room d-flex">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room04.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Honeymoon Villa</h3>
                        <div class="info">
                          <p><i class="bi bi-house-check pe-2"></i>Available Room : 5 Rooms</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            2 flat screen tv's (in bedroom and livingroom), wardrobe, bed side
                            tables, mini bar, Safety Deposit Box (SDB), air conditioner, standing
                            lamps, working desk, dressing table, luggage rack, tea and coffee making
                            facilities, vanity, ensuite bathroom with bathub.
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
        <div class="deluxe pt-5" v-if="isActive('deluxe')">
          <div class="row">
            <h2 class="pt-3 pb-1 fs-3">Deluxe</h2>
            <p class="sub-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt illo magni aliquid
              sequi vero modi facilis culpa voluptatum consequuntur corporis? Nostrum ullam quaerat
              harum magnam, blanditiis voluptatibus id corrupti dolorum?
            </p>
            <div>
              <div class="regular-room d-flex">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room05.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Deluxe Valley</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room Size : 80 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            flat screen TV, wardrobe, bed side tables, mini bar, Safety Deposit Box
                            (SDB), air conditioner, standing lamps, working desk, dressing table,
                            luggage rack, tea and coffee making facilities, vanity, ensuite bathroom
                            with bathub.
                          </p>
                        </div>
                        <button class="custom-btn">Check In</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="regular-room d-flex pt-5">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room06.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Deluxe Resort</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room Size : 80 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            flat screen TV, wardrobe, bed side tables, mini bar, Safety Deposit Box
                            (SDB), air conditioner, standing lamps, working desk, dressing table,
                            luggage rack, tea and coffee making facilities, vanity, ensuite bathroom
                            with bathub.
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
        <div class="premium pt-5" v-if="isActive('premium')">
          <div class="row">
            <h2 class="pt-3 pb-1 fs-3">Premium Suite</h2>
            <p class="sub-title">
              Modern minimalist architecture, overlooking the beautiful Resort, private balcony with
              modern chair and tables, Exclusive access to Executive Lounge and all facilities
              included.
            </p>
            <div>
              <div class="regular-room d-flex">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room08.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Executive Room</h3>
                        <div class="info">
                          <p><i class="bi bi-arrows-fullscreen pe-2"></i>Room size : 80 sqm</p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            flat screen TV, wardrobe, bed side tables, mini bar, Safety Deposit Box
                            (SDB), air conditioner, standing lamps, working desk, dressing table,
                            luggage rack, tea and coffee making facilities, vanity, ensuite bathroom
                            with bathub.
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
        <div class="bungalow pt-5 pb-5" v-if="isActive('bungalow')">
          <div class="row">
            <h2 class="pt-3 pb-1 fs-3">Rooftop Bungalow</h2>
            <p class="sub-title">
              The exlusive rooftop bungalow located at the top of the 3rd and 4th guilding,
              overlooking the overal area of the resort, very unique and traditional design of Bali,
              completed with kitchenette, ensuite bathroom, outdoor shower, small pateo, and bench.
            </p>
            <div>
              <div class="regular-room d-flex">
                <div class="custom-border">
                  <div class="row">
                    <div class="col-lg-7 col-12">
                      <img src="@/assets/img/accomodation/room07.jpg" alt="" />
                    </div>
                    <div class="col-lg-5 col-12">
                      <div class="info-room">
                        <h3>Rooftop Bungalow</h3>
                        <div class="info">
                          <p>
                            <i class="bi bi-geo-alt pe-2"></i>Location : At the top of the 3rd and
                            4th guilding
                          </p>
                          <p><i class="bi bi-folder-plus pe-2"></i>Room Features :</p>
                          <p class="text">
                            flat screen TV, wardrobe, bed side tables, mini bar, Safety Deposit Box
                            (SDB), air conditioner, standing lamps, working desk, dressing table,
                            luggage rack, tea and coffee making facilities, vanity, ensuite bathroom
                            with bathub.
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
      </div>
    </div>
  </section>
  <MainFooter />
</template>

<style scoped>
.active {
  color: #ed117f;
}

.main-img {
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url('@/assets/img/accomodation/room01.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 400px;
  padding-bottom: 100px;
  /* padding-bottom: -30%; */
}

.hero-title-main {
  font-weight: 600;
}

.accomodation img {
  object-fit: cover;
  width: 100%;
  height: 100%;
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
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 30px;
}

.cbp:hover,
.cbp-filter-item:hover {
  color: #117fb4;
}

.cbp-filters {
  border-bottom: 2px solid gray;
}

.cbp-filters a {
  text-decoration: none;
  color: gray;
  font-size: 18px;
}
.cbp {
  cursor: pointer;
}

.cbp-filters a:hover {
  color: black;
}

.cbp-filter-item {
  border-right: 1.2px solid gray;
}

.col-lg-7 col-12 img {
  width: 100%;
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

.info-room {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 15px 20px;
}

.info-room .info {
  margin-top: 2rem;
  font-size: 14px;
}

.info p {
  margin-bottom: 5px;
}

.info .text {
  padding-left: 1.8rem;
  font-size: 12px;
  line-height: 20px;
}

.custom-btn {
  color: #fff;
  background: black;

  padding: 10px 25px;
  margin-top: 2rem;
  letter-spacing: 2px;
  transition: all 500ms;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 8px;
}

.custom-btn:hover {
  background: #fff;
  color: black;
  border: 2px solid black;
}

.suite {
  margin-top: 5rem;
}

.custom-border {
  border: 1px solid gray;
}

.honeymoon {
  margin-top: 5rem;
}

.info i {
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  /* .main-img {
    padding-top: 100%;
  } */

  .hero-text h3 {
    font-size: 2rem;
  }

  .sub-text {
    font-size: 1.5rem;
  }
}
</style>
